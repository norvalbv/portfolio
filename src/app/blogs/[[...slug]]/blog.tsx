import { getS3ObjectByUrl } from '@/lib/actions/getS3Objects';
import Anchor from '@/src/components/Markdown/Anchor';
import Code from '@/src/components/Markdown/Code';
import List from '@/src/components/Markdown/List';
import UnorderedList from '@/src/components/Markdown/UnorderedList';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Fragment, ReactElement, useEffect, useState } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchBlogContent = async (blog?: string, type?: 'notes' | 'blog'): Promise<string | null> => {
  if (!blog) return null;

  if (type === 'notes') {
    const url = await getS3ObjectByUrl(blog);
    return url ? filterFrontMatterAndTitle(url) : null;
  }

  try {
    const response = await fetch(`${BASE_URL}/${blog}`);
    return await response.text();
  } catch (error) {
    return null;
  }
};

const filterFrontMatterAndTitle = (content: string): string => {
  // Remove front matter
  const frontMatterRegex = /^---\s*[\s\S]*?\s*---/;
  let filteredContent = content.replace(frontMatterRegex, '').trim();

  // Remove title and optional #Complete
  const titleRegex = /^\s*(.+?)(?:\s+#Complete)?\s*---/;
  filteredContent = filteredContent.replace(titleRegex, '').trim();

  return filteredContent;
};

const BlogContent = ({ blog, type }: { blog?: string; type?: 'notes' | 'blog' }): ReactElement => {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!blog) return;
    const getContent = async () => {
      setIsLoading(true);
      const fetchedContent = await fetchBlogContent(blog, type);
      console.log(fetchedContent, blog, type);
      setContent(fetchedContent);
      setIsLoading(false);
    };

    getContent();
  }, [blog, type]);

  return (
    <article className="flex h-full w-full">
      <div className="w-full flex-grow">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <p>Loading...</p>
          </div>
        ) : content ? (
          <Markdown
            options={{
              wrapper: Fragment,
              overrides: {
                h1: {
                  component: Anchor,
                  props: { level: 1 },
                },
                h2: {
                  component: Anchor,
                  props: { level: 2 },
                },
                h3: {
                  component: Anchor,
                  props: { level: 3 },
                },
                h4: {
                  component: Anchor,
                  props: { level: 4 },
                },
                h5: {
                  component: Anchor,
                  props: { level: 5 },
                },
                h6: {
                  component: Anchor,
                  props: { level: 6 },
                },
                p: {
                  props: {
                    className: 'mb-6 leading-6 text-sm text-light-text/90 dark:text-dark-text/90',
                  },
                },
                ul: {
                  component: UnorderedList,
                  props: { className: 'list-disc pl-6 mb-6' },
                },
                li: {
                  component: List,
                  props: { className: 'mb-2' },
                },
                code: {
                  component: Code,
                },
                a: {
                  props: {
                    className: 'text-blue-400 hover:text-blue-300 transition-colors duration-200',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                },
                ol: {
                  props: { className: 'list-decimal pl-6 mb-6' },
                },
                strong: {
                  props: { className: 'font-bold text-accent-primary' },
                },
                em: {
                  props: { className: 'italic text-accent-primary' },
                },
                blockquote: {
                  props: {
                    className:
                      'border-l-4 border-accent-tertiary pl-4 py-2 mb-6 bg-light-neutral dark:bg-gray-800 rounded',
                  },
                },
              } as MarkdownToJSX.Overrides,
            }}
          >
            {content}
          </Markdown>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p>No content found.</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogContent;
