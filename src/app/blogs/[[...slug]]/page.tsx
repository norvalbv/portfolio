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
import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import BlogContent from './blog';

const Page = ({ params }: { params: { slug?: string[] } }): ReactElement => {
  const { slug = [] } = params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TreeNode[]>([]);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);
  const { isMobile } = useWindowSize();

  const type = (slug[0] as 'notes' | 'blog') || 'notes';
  const currentBlog = type === 'notes' ? slug.slice(1).join('/') : slug.at(-1);

  const blogData = useMemo(() => {
    return blogTreeData.find((blog) => blog.url === currentBlog) || blogTreeData[0];
  }, [currentBlog]);

  const blogName = blogData.name;
  const filePath = type !== 'notes' ? blogData.file : currentBlog;

  const links: LinkProps[] = useMemo(
    () => [
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
    ],
    [type]
  );

  const toggleBlogMenu = useCallback((): void => {
    setBlogMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (type !== 'notes') return;

    const fetchS3Data = async () => {
      setLoading(true);
      try {
        const objects = await listS3Objects();
        if (objects) {
          const treeData: TreeNode[] = objects.map(({ Key }) => ({
            name: Key?.split('/').pop() || '',
            type: Key?.endsWith('/') ? 'folder' : 'file',
            url: Key || '',
          }));
          setData(treeData);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchS3Data();
  }, [type]);

  return (
    <div className="relative mx-auto flex w-full max-w-7xl px-2 flex-col lg:flex-row lg:gap-10">
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
      <div className="relative h-[calc(100vh-10.475rem)] w-full flex-1 overflow-x-hidden rounded-xl border border-light-text/50 bg-white shadow-xl dark:border-dark-text/50 dark:bg-dark-dark/30">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-light-text/50 bg-white px-6 py-4 dark:border-gray-700 dark:bg-dark-dark">
          <h1 className="text-xl font-semibold lg:text-4xl">
            {type === 'notes'
              ? `Benji's notes - ${decodeURIComponent(params.slug?.at(-1) || '') || 'Introduction'}`
              : `Blogs - ${blogName}`}
          </h1>
          <button type="button" className="lg:hidden" onClick={toggleBlogMenu}>
            <Hamburger
              toggled={blogMenuOpen}
              size={isMobile ? 24 : 28}
              rounded
              aria-expanded={blogMenuOpen}
              aria-label="Blog menu button"
            />
            <span className="sr-only">Toggle blog menu</span>
          </button>
        </div>
        <div className="flex h-[calc(100%-4rem)] w-full flex-col p-6">
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
          <BlogContent blog={filePath} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Page;
