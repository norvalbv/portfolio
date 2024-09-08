'use client';

import { fileTreeData } from '__mocks__/fileTreeData';
import { Props as ButtonProps } from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import FileTree from 'components/FileTree';
import { blogTreeData } from 'constants/blogs';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from 'constants/index';
import Hamburger from 'hamburger-react';
import useWindowSize from 'hooks/useWindowSize';
import React, { ReactElement, useState } from 'react';
import { classNames } from 'utils';
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
      <div
        className={classNames(
          'lg:xp-0 fixed inset-y-0 left-0 z-40 border-r px-6 pt-6 transition-transform duration-300 ease-in-out dark:bg-dark-dark lg:relative lg:translate-x-0 lg:border-0 lg:pt-0 lg:dark:bg-transparent',
          blogMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {isMobile && (
          <button type="button" className="mb-8 flex w-full justify-end" onClick={toggleBlogMenu}>
            <Hamburger
              toggled
              toggle={(): void => setBlogMenuOpen(false)}
              size={24}
              rounded
              aria-expanded={blogMenuOpen}
              aria-label="Blog menu button"
            />
            <span className="sr-only">Close blog menu</span>
          </button>
        )}
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
