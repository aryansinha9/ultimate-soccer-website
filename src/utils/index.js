// src/utils/index.js

export const createPageUrl = (pageName) => {
  if (!pageName) return '/';
  return `/${pageName.toLowerCase()}`;
};