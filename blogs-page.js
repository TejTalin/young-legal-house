function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(dateValue) {
  if (!dateValue) return "Recently";
  return new Date(dateValue).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function assetUrl(asset) {
  const url = asset && asset.fields && asset.fields.file && asset.fields.file.url;
  return url ? `https:${url}` : "";
}

function listValue(fieldValue) {
  if (Array.isArray(fieldValue)) return fieldValue.filter(Boolean);
  if (!fieldValue) return [];
  return [fieldValue];
}

function normalizePost(item) {
  const fields = item.fields || {};
  return {
    id: item.sys && item.sys.id ? item.sys.id : fields.slug || fields.title,
    title: fields.title || "Untitled",
    slug: fields.slug || "",
    author: fields.author || "YLH Team",
    publishDate: fields.publishDate || (item.sys ? item.sys.createdAt : ""),
    excerpt: fields.excerpt || "",
    articleBody: fields.articleBody || null,
    practiceAreas: listValue(fields.practiceArea),
    contentType: fields.contentType || "Article",
    thumbnail: assetUrl(fields.thumbnail)
  };
}

document.addEventListener("DOMContentLoaded", async function () {
  const featuredEl = document.getElementById("featuredPublication");
  const gridEl = document.getElementById("blogsGrid");
  const searchEl = document.getElementById("searchInput");
  const contentTypeListEl = document.getElementById("contentTypeFilterList");
  const practiceAreaListEl = document.getElementById("practiceAreaFilterList");
  const authorListEl = document.getElementById("authorFilterList");
  const sortEl = document.getElementById("sortFilter");
  const filterToggleBtn = document.getElementById("filterToggleBtn");
  const filterPopover = document.getElementById("filterPopover");
  const filterCloseBtn = document.getElementById("filterCloseBtn");
  const activeFiltersBar = document.getElementById("activeFiltersBar");

  if (!featuredEl || !gridEl) return;

  let allPosts = [];
  let viewPosts = [];
  let selectedContentTypes = new Set();
  let selectedPracticeAreas = new Set();
  let selectedAuthors = new Set();

  function isSelected(selectionSet, value) {
    return selectionSet.size === 0 || selectionSet.has(value);
  }

  function optionInputId(prefix, value) {
    return `${prefix}-${String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  }

  function renderFilterOptions(container, options, prefix, setRef) {
    if (!container) return;
    if (!options.length) {
      container.innerHTML = '<p class="loading-note">No options</p>';
      return;
    }

    container.innerHTML = options.map(function (opt) {
      const id = optionInputId(prefix, opt);
      return `
        <label class="filter-option-item" for="${id}">
          <input type="checkbox" id="${id}" value="${escapeHtml(opt)}">
          <span>${escapeHtml(opt)}</span>
        </label>
      `;
    }).join("");

    container.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
      checkbox.addEventListener("change", function (event) {
        const value = event.target.value;
        if (event.target.checked) setRef.add(value);
        else setRef.delete(value);
        applyFiltersAndSort();
      });
    });
  }

  function renderActiveFilters() {
    if (!activeFiltersBar) return;
    const chips = [];
    selectedContentTypes.forEach(function (value) { chips.push({ type: "content", value: value }); });
    selectedPracticeAreas.forEach(function (value) { chips.push({ type: "practice", value: value }); });
    selectedAuthors.forEach(function (value) { chips.push({ type: "author", value: value }); });

    if (!chips.length) {
      activeFiltersBar.innerHTML = "";
      return;
    }

    activeFiltersBar.innerHTML = chips.map(function (chip) {
      return `<button class="active-filter-chip" data-filter-type="${chip.type}" data-filter-value="${escapeHtml(chip.value)}">${escapeHtml(chip.value)} <span>&times;</span></button>`;
    }).join("");

    activeFiltersBar.querySelectorAll(".active-filter-chip").forEach(function (chipBtn) {
      chipBtn.addEventListener("click", function () {
        const type = chipBtn.getAttribute("data-filter-type");
        const value = chipBtn.getAttribute("data-filter-value");
        if (type === "content") selectedContentTypes.delete(value);
        if (type === "practice") selectedPracticeAreas.delete(value);
        if (type === "author") selectedAuthors.delete(value);

        const input = document.querySelector(`input[value="${CSS.escape(value)}"]`);
        if (input) input.checked = false;
        applyFiltersAndSort();
      });
    });
  }

  function renderFeatured(post) {
    if (!post) {
      featuredEl.innerHTML = '<p class="loading-note">No featured publication available yet.</p>';
      return;
    }

    const tags = post.practiceAreas.map(function (area) {
      return `<span class="meta-tag">${escapeHtml(area)}</span>`;
    }).join("");

    featuredEl.innerHTML = `
      <div class="featured-grid">
        <div class="featured-media">
          ${
            post.thumbnail
              ? `<img src="${post.thumbnail}" alt="${escapeHtml(post.title)}">`
              : '<div class="featured-image-fallback">Featured Publication</div>'
          }
        </div>
        <div class="featured-content">
          <div class="featured-label">Featured ${escapeHtml(post.contentType)}</div>
          <h2>${escapeHtml(post.title)}</h2>
          <p class="featured-meta">${formatDate(post.publishDate)} | ${escapeHtml(post.author)}</p>
          <div class="meta-tag-row">${tags}</div>
          <p>${escapeHtml(post.excerpt || "Read this publication for detailed legal analysis.")}</p>
          <a class="action-link" href="article.html?id=${encodeURIComponent(post.slug)}">Read publication</a>
        </div>
      </div>
    `;
  }

  function renderGrid(posts) {
    if (!posts.length) {
      gridEl.innerHTML = '<p class="loading-note">No publications match the selected filters.</p>';
      return;
    }

    gridEl.innerHTML = posts.map(function (post) {
      const areaTags = post.practiceAreas.map(function (area) {
        return `<span class="meta-tag">${escapeHtml(area)}</span>`;
      }).join("");

      return `
        <article class="glass-card publication-card">
          <a class="card-image-wrap" href="article.html?id=${encodeURIComponent(post.slug)}" aria-label="Read ${escapeHtml(post.title)}">
            ${
              post.thumbnail
                ? `<img src="${post.thumbnail}" alt="${escapeHtml(post.title)}" class="card-image">`
                : '<div class="card-image-fallback">No Thumbnail</div>'
            }
          </a>
          <div class="publication-card-body">
            <div class="publication-meta-line">
              <span class="content-type-badge">${escapeHtml(post.contentType)}</span>
              <span>${formatDate(post.publishDate)}</span>
            </div>
            <h3><a href="article.html?id=${encodeURIComponent(post.slug)}">${escapeHtml(post.title)}</a></h3>
            <p class="publication-meta-line">By ${escapeHtml(post.author)}</p>
            <div class="meta-tag-row">${areaTags}</div>
            <p>${escapeHtml(post.excerpt || "Open this publication to read the full legal brief.")}</p>
            <a class="action-link" href="article.html?id=${encodeURIComponent(post.slug)}">Open article</a>
          </div>
        </article>
      `;
    }).join("");
  }

  function populateFilterOptions(posts) {
    const contentTypes = [...new Set(posts.map(function (p) { return p.contentType; }))].sort();
    const authors = [...new Set(posts.map(function (p) { return p.author; }))].sort();
    const practiceAreas = [...new Set(posts.flatMap(function (p) { return p.practiceAreas; }))].sort();
    renderFilterOptions(contentTypeListEl, contentTypes, "ctype", selectedContentTypes);
    renderFilterOptions(practiceAreaListEl, practiceAreas, "parea", selectedPracticeAreas);
    renderFilterOptions(authorListEl, authors, "author", selectedAuthors);
  }

  function applyFiltersAndSort() {
    const search = (searchEl && searchEl.value ? searchEl.value : "").trim().toLowerCase();
    const sortMode = sortEl ? sortEl.value : "latest";

    viewPosts = allPosts.filter(function (post) {
      const inSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        (post.articleBody && JSON.stringify(post.articleBody).toLowerCase().includes(search));

      const matchesType = isSelected(selectedContentTypes, post.contentType);
      const matchesAuthor = isSelected(selectedAuthors, post.author);
      const matchesPractice = selectedPracticeAreas.size === 0 ||
        post.practiceAreas.some(function (area) { return selectedPracticeAreas.has(area); });

      return inSearch && matchesType && matchesAuthor && matchesPractice;
    });

    viewPosts.sort(function (a, b) {
      if (sortMode === "oldest") return new Date(a.publishDate) - new Date(b.publishDate);
      if (sortMode === "az") return a.title.localeCompare(b.title);
      if (sortMode === "za") return b.title.localeCompare(a.title);
      return new Date(b.publishDate) - new Date(a.publishDate);
    });

    renderGrid(viewPosts);
    renderActiveFilters();
  }

  try {
    const client = window.getContentfulClient();
    const response = await client.getEntries({
      content_type: window.CONTENTFUL_CONFIG.contentType,
      order: "-fields.publishDate",
      include: 2
    });

    allPosts = response.items.map(normalizePost).filter(function (post) {
      return Boolean(post.slug);
    });

    renderFeatured(allPosts[0]);
    populateFilterOptions(allPosts);
    applyFiltersAndSort();

    [searchEl, sortEl].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", applyFiltersAndSort);
      el.addEventListener("change", applyFiltersAndSort);
    });

    if (filterToggleBtn && filterPopover) {
      filterToggleBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        filterPopover.classList.toggle("show");
      });
    }

    if (filterCloseBtn && filterPopover) {
      filterCloseBtn.addEventListener("click", function () {
        filterPopover.classList.remove("show");
      });
    }

    document.addEventListener("click", function (event) {
      if (!filterPopover || !filterToggleBtn) return;
      const insidePopover = filterPopover.contains(event.target);
      const clickedToggle = filterToggleBtn.contains(event.target);
      if (!insidePopover && !clickedToggle) {
        filterPopover.classList.remove("show");
      }
    });
  } catch (error) {
    console.error(error);
    featuredEl.innerHTML = '<p class="loading-note">Unable to load featured publication.</p>';
    gridEl.innerHTML = '<p class="loading-note">Failed to load publications. Check Contentful configuration and published entries.</p>';
  }
});
