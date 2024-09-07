'use client';

import { Props as ButtonProps } from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import FileTree from 'components/FileTree';
import Header from 'components/Header';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from 'constants/index';
import React, { ReactElement } from 'react';

const buttons: ButtonProps[] = [
  {
    text: 'Notes',
    onClick: (): void => {},
  },
  {
    text: 'Blogs',
    onClick: (): void => {},
  },
];

const Blog = (): ReactElement => {
  return (
    <div className="mx-10 mt-10 flex gap-10">
      <div>
        <ButtonGroup buttons={buttons} className="mb-6" />
        <FileTree title="Files" />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <Header title="Benji's notes" animation={false} description={BLOG_DESCRIPTION} />
        <p className="text-xs">
          <span className="text-red-500 underline underline-offset-2">A quick disclaimer:</span>
          &nbsp;
          {BLOG_DISCLAIMER}
        </p>
      </div>
    </div>
  );
};

export default Blog;
