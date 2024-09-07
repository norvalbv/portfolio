import Anchor from 'components/Markdown/Anchor';
import Code from 'components/Markdown/Code';
import List from 'components/Markdown/List';
import UnorderedList from 'components/Markdown/UnorderedList';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Fragment, ReactElement } from 'react';

const BLOGG = `
## Overview

The *call stack*, or commonly called just **stack**, \`oooo\` operates on a LIFO basis. It is handy to visualise this with the famous Tower of Hanoi game:

![[Tower of Hanoi Memory - Stack example.png]]

\`\`\`
const test = () => {}
\`\`\`

So from the example above, if you want to remove item '2' you would have to remove item '1' prior to the removal, therefore, you will always have older items nearer the base of the stack. 

\`\`\`
const test = () => {}
const test = () => {}
\`\`\`

- Hi
- How are you
- okay

[link](https://www.google.com)

> What is this?

"Are you oaky?"

`;

const Blog = (): ReactElement | null => {
  return (
    <article>
      <section>
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
                  className: 'border-l-4 border-accent-tertiary pl-4 py-2 mb-6 bg-gray-800 rounded',
                },
              },
            } as MarkdownToJSX.Overrides,
          }}
        >
          {BLOGG}
        </Markdown>
      </section>
    </article>
  );
};

export default Blog;
