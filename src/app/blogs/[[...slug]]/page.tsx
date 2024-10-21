'use client';

import { fileTreeData } from '__mocks__/fileTreeData';
import FileTree from '@/src/components/FileTree';
import { Props as LinkProps } from '@/src/components/Link';
import LinkGroup from '@/src/components/LinkGroup';
import SidePeepView from '@/src/components/SidePeepView';
import { blogTreeData } from 'constants/blogs';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from '@/src/constants/index';
import Hamburger from 'hamburger-react';
import useWindowSize from '@/src/hooks/useWindowSize';
import React, { ReactElement, Suspense, useState } from 'react';
import Blog from './blog';

const Page = ({ params }: { params: { slug?: string[] } }): ReactElement => {
  const currentBlog = params.slug?.[1] || blogTreeData[0].url;
  const filePath = blogTreeData.find((blog) => blog.url === currentBlog)?.file;
  const type = (params.slug?.[0] as 'notes' | 'blog') || 'notes';

  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const { isMobile } = useWindowSize();

  const links: LinkProps[] = [
    {
      text: 'Notes',
      href: '/blogs/notes',
      active: type === 'notes',
    },
    {
      text: 'Blogs',
      href: '/blogs/blog',
      active: type === 'blog',
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
        <LinkGroup links={links} className="mb-6 w-full" />
        <FileTree
          title={type === 'notes' ? 'Notes' : 'Blogs'}
          data={type === 'notes' ? fileTreeData : blogTreeData}
        />
      </SidePeepView>
      <div className="hidden lg:block">
        <LinkGroup links={links} className="mb-6 w-full" />
        <FileTree
          title={type === 'notes' ? 'Notes' : 'Blogs'}
          data={type === 'notes' ? fileTreeData : blogTreeData}
        />
      </div>
      <div className="h-[calc(100vh-13.875rem)] flex-1 overflow-scroll rounded-xl border border-light-text/50 bg-white shadow-xl dark:border-dark-text/50 dark:bg-dark-dark/30">
        <div className="flex items-center justify-between border-b border-light-text/50 px-6 py-4 dark:border-gray-700">
          <h1 className="text-xl font-semibold lg:text-4xl">
            {type === 'notes' ? "Benji's notes" : 'Blogs'}
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
        <div className="w-full overflow-y-scroll p-6">
          {type === 'notes' && (
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
          <Suspense fallback={<div>Loading...</div>}>
            <Blog blog={filePath} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
