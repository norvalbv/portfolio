'use client';

import { fileTreeData } from '__mocks__/fileTreeData';
import { Props as ButtonProps } from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import FileTree from 'components/FileTree';
import Header from 'components/Header';
import { blogTreeData } from 'constants/blogs';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from 'constants/index';
import React, { ReactElement, useState } from 'react';

const Blog = (): ReactElement => {
  const [active, setActive] = useState<'notes' | 'blogs'>('notes');

  const buttons: ButtonProps[] = [
    {
      text: 'Notes',
      onClick: (): void => setActive('notes'),
      active: active === 'notes',
    },
    {
      text: 'Blogs',
      onClick: (): void => setActive('blogs'),
      active: active === 'blogs',
    },
  ];

  return (
    <div className="mx-10 mt-10 flex gap-10">
      <div>
        <ButtonGroup buttons={buttons} className="mb-6" />
        <FileTree
          title={active === 'notes' ? 'Notes' : 'Blogs'}
          data={active === 'notes' ? fileTreeData : blogTreeData}
        />
      </div>
      <div className="flex flex-1 flex-col gap-6 overflow-scroll rounded-xl border border-light-text/50 bg-white p-6 shadow-lg dark:border-dark-text/50 dark:bg-dark-dark/30">
        {active === 'notes' && (
          <>
            <Header title="Benji's notes" animation={false} description={BLOG_DESCRIPTION} />
            <p className="text-xs">
              <span className="text-red-500 underline underline-offset-2">A quick disclaimer:</span>
              &nbsp;
              {BLOG_DISCLAIMER}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
