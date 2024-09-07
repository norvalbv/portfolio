import FileTree from 'components/FileTree';
import React, { ReactElement } from 'react';
import P from 'components/P';

const Blog = (): ReactElement => {
  return (
    <>
      <div>Blog</div>
      <FileTree />
      <P />
    </>
  );
};

export default Blog;
