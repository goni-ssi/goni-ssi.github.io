export const getPostPath = (filePath: string | null) => {
  if (filePath == null) {
    return '';
  }

  const postRootPath = '/src/pages/posts/';
  const [_, postPath] = filePath.split(postRootPath);
  const withoutMdx = postPath.replace(/(\/index\.mdx$)|(\.mdx$)/, '');

  return `/posts/${withoutMdx}`;
};
