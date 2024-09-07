import ButtonGroup from 'components/ButtonGroup';
import FileTree from 'components/FileTree';
import Header from 'components/Header';
import React, { ReactElement } from 'react';

const Blog = (): ReactElement => {
  return (
    <div className="mx-10 mt-10 flex gap-10">
      <FileTree />
      <div className="flex flex-col gap-6">
        <Header title="Benji's notes" animation={false} />
        <ButtonGroup buttons={[]} />
      </div>
    </div>
  );
};

export default Blog;
