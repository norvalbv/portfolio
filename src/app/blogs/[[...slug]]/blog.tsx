import Anchor from '@/src/components/Markdown/Anchor';
import Code from '@/src/components/Markdown/Code';
import List from '@/src/components/Markdown/List';
import UnorderedList from '@/src/components/Markdown/UnorderedList';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Fragment, ReactElement } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BlogContent = async ({ blog }: { blog?: string }): Promise<ReactElement | null> => {
  if (!blog) return null;

  const response = await fetch(`${BASE_URL}/${blog}`);
  const content = await response.text();

  if (!content) return null;

  return (
    <article className="w-full">
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
    </article>
  );
};

export default BlogContent;
