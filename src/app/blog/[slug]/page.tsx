import Anchor from 'components/Markdown/Anchor';
import Code from 'components/Markdown/Code';
import List from 'components/Markdown/List';
import UnorderedList from 'components/Markdown/UnorderedList';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Fragment, ReactElement } from 'react';
import { classNames } from 'utils';

const BLOGG = `
## Overview

The *call stack*, or commonly called just *stack*, is a logical (not physical) region within [[Memory (RAM)|memory]] that is controlled by the [[Kernel#Kernel Vs Operating System|operating system]]. It is a data structure that functions on a Last in First Out (LIFO) principle, where the addition and removal of items always take place at the top and is designed this way due to a combination of efficiency and functionality. Primitive and non-complex types are stored within the stack, [[How Data is Stored in JavaScript|the storing of types in JavaScript]], for example, types such as boolean, string, number, etc. are all stored in the call stack. Whereas, function definitions and complex types such as objects are stored within the [[Memory Heap|heap]]. The call stack just has a reference (or a pointer) where these function definitions and objects are stored. This is due to the simple, static nature of the stack, whereas the heap is dynamic and can shrink or expand in size as and when.

As per above, the call stack operates on a LIFO basis. It is handy to visualise this with the famous Tower of Hanoi game:

![[Tower of Hanoi Memory - Stack example.png]]

\`\`\`
const test = () => {}
\`\`\`

So from the example above, if you want to remove item '2' you would have to remove item '1' prior to the removal, therefore, you will always have older items nearer the base of the stack. 

\`\`\`
const test = () => {}
const test = () => {}
\`\`\`

If that doesn't help, as an example: when you use a mobile app or browser and press the back button, it will take you to the previous page. As you navigate from page to page, those pages are placed on a stack with the current page always on the top and the first page you looked at on the base. When you click on the back button you will remove your current page (on the top) from the stack and the previous will become current. Whilst the page details itself will not all be part of the call stack, it helps visualise how it works.

## What is Stored on the Stack`;

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
                props: { className: classNames({ tag: 'h1' }), level: 1 },
              },
              h2: {
                component: Anchor,
                props: { className: classNames({ tag: 'h2' }), level: 2 },
              },
              h3: {
                component: Anchor,
                props: { className: classNames({ tag: 'h3' }), level: 3 },
              },
              h4: {
                component: Anchor,
                props: { className: classNames({ tag: 'h4' }), level: 4 },
              },
              h5: {
                component: Anchor,
                props: { level: 5 },
              },
              h6: {
                component: Anchor,
                props: { level: 6 },
              },
              p: { props: { className: classNames({ tag: 'p' }) } },
              ul: {
                component: UnorderedList,
                props: { className: classNames({ tag: 'ul' }) },
              },
              li: {
                component: List,
                props: { className: classNames({ tag: 'li' }) },
              },
              code: {
                component: Code,
              },
              a: {
                props: { className: classNames({ tag: 'a' }) },
              },
              ol: {
                props: { className: classNames({ tag: 'ol' }) },
              },
              strong: {
                props: { className: classNames({ tag: 'strong' }) },
              },
              em: {
                props: { className: classNames({ tag: 'em' }) },
              },
              blockquote: {
                props: { className: classNames({ tag: 'blockquote' }) },
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
