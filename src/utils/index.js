export const joinImageUrl = (base, path) =>
  path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : null;

export const buildDetailsPath = (basePath, originalTitle) =>
  `${basePath}movieDetails/${encodeURIComponent(originalTitle)}`;
