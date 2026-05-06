window.CONTENTFUL_CONFIG = {
  space: "twt03qr6heez",
  accessToken: "zvthVCQasvhPp2rhH1drQTA6eE6M9q6jkxtYEMMnXmQ",
  environment: "master",
  contentType: "blogPost"
};

window.getContentfulClient = function getContentfulClient() {
  if (!window.contentful) {
    throw new Error("Contentful SDK failed to load.");
  }

  if (
    !window.CONTENTFUL_CONFIG ||
    window.CONTENTFUL_CONFIG.space === "REPLACE_WITH_SPACE_ID" ||
    window.CONTENTFUL_CONFIG.accessToken === "REPLACE_WITH_DELIVERY_ACCESS_TOKEN"
  ) {
    throw new Error("Contentful config is missing. Update contentful-config.js.");
  }

  return window.contentful.createClient({
    space: window.CONTENTFUL_CONFIG.space,
    accessToken: window.CONTENTFUL_CONFIG.accessToken,
    environment: window.CONTENTFUL_CONFIG.environment
  });
};
