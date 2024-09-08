'use client';

import { fileTreeData } from '__mocks__/fileTreeData';
import { Props as ButtonProps } from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import FileTree from 'components/FileTree';
import SidePeepView from 'components/SidePeepView';
import { blogTreeData } from 'constants/blogs';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from 'constants/index';
import Hamburger from 'hamburger-react';
import useWindowSize from 'hooks/useWindowSize';
import React, { ReactElement, useState } from 'react';
import Blog from './[slug]/page';

const BlogPage = (): ReactElement => {
  const [active, setActive] = useState<'notes' | 'blogs'>('notes');
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const { isMobile } = useWindowSize();

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

  const toggleBlogMenu = (): void => {
    setBlogMenuOpen(!blogMenuOpen);
  };

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
      <SidePeepView
        isOpened={blogMenuOpen}
        className="block lg:hidden"
        width={336}
        close={() => setBlogMenuOpen(false)}
      >
        <ButtonGroup buttons={buttons} className="mb-6 w-full" />
        <FileTree
          title={active === 'notes' ? 'Notes' : 'Blogs'}
          data={active === 'notes' ? fileTreeData : blogTreeData}
        />
      </SidePeepView>
      <div className="hidden lg:block">
        <ButtonGroup buttons={buttons} className="mb-6 w-full" />
        <FileTree
          title={active === 'notes' ? 'Notes' : 'Blogs'}
          data={active === 'notes' ? fileTreeData : blogTreeData}
        />
      </div>
      <div className="h-[calc(100vh-13.875rem)] flex-1 overflow-scroll rounded-xl border border-gray-200 bg-white shadow-xl dark:border-dark-text/50 dark:bg-dark-dark/30">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
          <h1 className="text-xl font-semibold lg:text-4xl">
            {active === 'notes' ? "Benji's notes" : 'Blogs'}
          </h1>
          <button type="button" className="lg:hidden" onClick={toggleBlogMenu}>
            <Hamburger
              toggled={blogMenuOpen}
              toggle={(): void => setBlogMenuOpen(!blogMenuOpen)}
              size={isMobile ? 24 : 28}
              rounded
              aria-expanded={blogMenuOpen}
              aria-label="Blog menu button"
            />
            <span className="sr-only">Toggle blog menu</span>
          </button>
        </div>
        <div className="overflow-y-scroll p-6">
          {active === 'notes' && (
            <>
              <p>{BLOG_DESCRIPTION}</p>
              <p className="my-6 text-xs text-gray-600 dark:text-gray-400">
                <span className="text-red-500 underline underline-offset-2">
                  A quick disclaimer:
                </span>
                &nbsp;
                {BLOG_DISCLAIMER}
              </p>
            </>
          )}
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
