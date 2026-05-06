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
    citations: fields.citations || "",
    practiceAreas: listValue(fields.practiceArea),
    contentType: fields.contentType || "Article",
    thumbnail: assetUrl(fields.thumbnail)
  };
}

function updateSeo(post) {
  document.title = `${post.title} | Young Legal House`;

  const desc = post.excerpt || `${post.contentType} by ${post.author}`;
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute("content", desc);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `${window.location.origin}/article.html?id=${encodeURIComponent(post.slug)}`);
}

document.addEventListener("DOMContentLoaded", async function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");
  const container = document.getElementById("article-container");

  if (!container) return;
  if (!slug) {
    container.innerHTML = '<p class="loading-note">Article not found. <a href="blogs.html" class="action-link">Back to publications</a></p>';
    return;
  }

  try {
    const client = window.getContentfulClient();
    const [articleRes, relatedRes] = await Promise.all([
      client.getEntries({
        content_type: window.CONTENTFUL_CONFIG.contentType,
        "fields.slug": slug,
        limit: 1,
        include: 2
      }),
      client.getEntries({
        content_type: window.CONTENTFUL_CONFIG.contentType,
        order: "-fields.publishDate",
        limit: 4,
        include: 1
      })
    ]);

    if (!articleRes.items.length) {
      container.innerHTML = '<p class="loading-note">Article not found. <a href="blogs.html" class="action-link">Back to publications</a></p>';
      return;
    }

    const post = normalizePost(articleRes.items[0]);
    const related = relatedRes.items
      .map(normalizePost)
      .filter(function (item) {
        return item.slug && item.slug !== post.slug;
      })
      .slice(0, 3);

    updateSeo(post);

    const bodyHtml = post.articleBody && window.richText
      ? window.richText.documentToHtmlString(post.articleBody)
      : `<p>${escapeHtml(post.excerpt || "No article body provided.")}</p>`;

    const tagsHtml = post.practiceAreas.map(function (area) {
      return `<span class="meta-tag">${escapeHtml(area)}</span>`;
    }).join("");

    const citationsHtml = post.citations
      ? `<section class="article-citations"><h3>Citations</h3><p>${escapeHtml(post.citations)}</p></section>`
      : "";

    const relatedHtml = related.length
      ? `<section class="related-posts">
          <h2>Related Publications</h2>
          <div class="cards-grid">
            ${related.map(function (item) {
              return `
                <article class="glass-card related-card">
                  <p class="publication-meta-line">${formatDate(item.publishDate)} | ${escapeHtml(item.contentType)}</p>
                  <h3><a href="article.html?id=${encodeURIComponent(item.slug)}">${escapeHtml(item.title)}</a></h3>
                  <p class="publication-meta-line">By ${escapeHtml(item.author)}</p>
                </article>
              `;
            }).join("")}
          </div>
        </section>`
      : "";

    container.innerHTML = `
      <article class="article-layout">
        <a href="blogs.html" class="action-link">Back to publications</a>
        <header class="article-header">
          <span class="content-type-badge">${escapeHtml(post.contentType)}</span>
          <h1>${escapeHtml(post.title)}</h1>
          <p class="publication-meta-line">Published ${formatDate(post.publishDate)} | By ${escapeHtml(post.author)}</p>
          <div class="meta-tag-row">${tagsHtml}</div>
        </header>
        ${
          post.thumbnail
            ? `<img src="${post.thumbnail}" alt="${escapeHtml(post.title)}" class="article-cover-image">`
            : ""
        }
        <section class="article-body-content">${bodyHtml}</section>
        ${citationsHtml}
      </article>
      ${relatedHtml}
    `;
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p class="loading-note">Failed to load this publication. Verify Contentful credentials and published entries.</p>';
  }
});
