'use client';

import { listS3Objects } from '@/lib/actions/listS3Objects';
import FileTree from '@/src/components/FileTree';
import { TreeNode } from '@/src/components/FileTree/Tree/BlogNavigation';
import { Props as LinkProps } from '@/src/components/Link';
import LinkGroup from '@/src/components/LinkGroup';
import SidePeepView from '@/src/components/SidePeepView';
import { blogTreeData } from '@/src/constants/blogs';
import { BLOG_DESCRIPTION, BLOG_DISCLAIMER } from '@/src/constants/index';
import useWindowSize from '@/src/hooks/useWindowSize';
import Hamburger from 'hamburger-react';
import React, { ReactElement, useEffect, useState } from 'react';
import Blog from './blog';


const Page = ({ params }: { params: { slug?: string[] } }): ReactElement => {
  const currentBlog = params.slug?.[1]
  const blogName = blogTreeData.find((blog) => blog.url === currentBlog)?.name;
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

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TreeNode[]>([]);


  useEffect(() => {
    const fetchS3Data = async () => {
      try {
        setLoading(true);
        const objects = await listS3Objects();

        if (objects) {
          const treeData: TreeNode[] = objects.map((object): TreeNode => {
            const key = object.Key || '';
            const name = key.split('/').pop() || '';
            const type = key.endsWith('/') ? 'folder' : 'file';

            return {
              name,
              type,
              url: key,
            };
          });
          setData(treeData);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (type === 'notes') {
      fetchS3Data();
    }
  }, [type] );

  const filePath = type !== 'notes' ? data.find((blog) => blog.url === currentBlog)?.url : currentBlog;

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
          data={type === 'notes' ? data : blogTreeData}
          loading={loading}
        />
      </SidePeepView>
      <div className="hidden lg:block">
        <LinkGroup links={links} className="mb-6 w-full" />
        <FileTree
          title={type === 'notes' ? 'Notes' : 'Blogs'}
          data={type === 'notes' ? data : blogTreeData}
          loading={loading}
        />
      </div>
      <div className="h-[calc(100vh-13.875rem)] relative flex-1 overflow-x-hidden rounded-xl border border-light-text/50 bg-white shadow-xl dark:border-dark-text/50 dark:bg-dark-dark/30">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-light-text/50 bg-white px-6 py-4 dark:border-gray-700 dark:bg-dark-dark">
          <h1 className="text-xl font-semibold lg:text-4xl">
            {type === 'notes' ? "Benji's notes" : `Blogs - ${blogName}`}
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
        <div className="w-full p-6 flex flex-col h-[calc(100%-4rem)]">
          {type === 'notes' && !filePath && (
            <>
              <p className="mb-6">{BLOG_DESCRIPTION}</p>
              <div className="mb-6 text-xs text-gray-600 dark:text-gray-400">
                <span className="text-red-500 underline underline-offset-2">
                  A quick disclaimer:
                </span>
                &nbsp;
                {BLOG_DISCLAIMER}
              </div>
            </>
          )}
          <Blog blog={filePath} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Page;
