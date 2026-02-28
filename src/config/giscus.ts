export const GISCUS_CONFIG = {
  repo: import.meta.env.PUBLIC_GISCUS_REPO,
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID,
  category: import.meta.env.PUBLIC_GISCUS_CATEGORY,
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID,
  lang: 'pt',
  reactionsEnabled: '1',
  emitMetadata: '1', // Enable to get comment count
  inputPosition: 'top',
  theme: 'light', // Will be dynamically updated based on page theme
  strict: '0',
};
