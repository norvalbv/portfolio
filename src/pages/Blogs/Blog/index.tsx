import React, { ReactElement, useEffect, useState } from 'react';
import CardWrapper from 'components/CardWrapper';
import Markdown from 'markdown-to-jsx';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arta } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useTheme from 'hooks/useTheme';
import Badge from 'components/Badge';
import { blogs } from '..';

type FrontMatter = {
  Aliases: string[];
  'date created': string | null;
  'date modified': string | null;
  'review-frequency': string | null;
  tags: string[] | null;
  title: string | null;
} & Record<string, string | string[]>;

const parseFrontMatterToArray = (lines: string[]): FrontMatter => {
  const obj: FrontMatter = {
    Aliases: [],
    'date created': null,
    'date modified': null,
    'review-frequency': null,
    tags: [],
    title: null,
  };

  let currentKey: null | string = null;

  lines.forEach((line) => {
    if (line.startsWith('---')) {
      // Skip the delimiter lines
      return;
    }

    const splitLine = line.split(':');

    if (splitLine.length > 1) {
      currentKey = splitLine[0].trim();
      const value = splitLine.slice(1).join(':').trim();

      if (value.startsWith('[')) {
        // Initialize an array for later
        obj[currentKey] = [];
      } else if (value) {
        obj[currentKey] = value;
      } else {
        // Initialize as an empty array if value is not present
        obj[currentKey] = [];
      }
    } else if (currentKey && Array.isArray(obj[currentKey])) {
      const listItem = line.trim().replace(/^-/, '').trim();
      if (listItem) {
        (obj[currentKey] as string[]).push(listItem);
      }
    }
  });

  return obj;
};

const UnorderedListComponent = ({
  children,
  ...props
}: {
  children: JSX.Element;
}): ReactElement => <ul {...props}>{children}</ul>;

const ListComponent = ({ children, ...props }: { children: JSX.Element }): ReactElement => (
  <ul {...props}>&bull; {children}</ul>
);

const CodeComponent = ({ children, ...props }: { children: string }): ReactElement => {
  const { isDarkMode } = useTheme();
  const isMultiline = /\n/.test(children);

  return isMultiline ? (
    <SyntaxHighlighter
      style={arta}
      customStyle={{
        borderRadius: '8px',
        boxShadow: '5px 6px 3px #00646630',
        backgroundColor: isDarkMode ? '#222222' : '#D0D0DD',
      }}
      showLineNumbers
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <pre className="inline-block w-max rounded-lg bg-light-code px-2 dark:bg-dark-code">
      <code>{children}</code>
    </pre>
  );
};

const Blog = (): ReactElement => {
  const [blog, setBlog] = useState<string | null>(null);
  const [frontMatter, setFrontMatter] = useState<FrontMatter | null>(null);
  const { pathname } = useLocation();

  const currentBlogIndex = blogs.findIndex((b) => pathname.includes(b.url));

  const { file, title } = blogs[currentBlogIndex];
  /**
   * Dynamically import blogs based on the current blog URL.
   */
  useEffect(() => {
    import(`../../../assets/blogs/${file}.md`)
      .then((res: { default: RequestInfo }) =>
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            const lines = res.split('\n');

            // Due to the syntax, there will always be three dashed lines in front matter.
            const frontMatterIndexes = lines.flatMap((line, i) => (line === '---' ? i : []));
            const frontMatter = lines.slice(0, frontMatterIndexes[2] + 1);
            /*
             * It's easier to obtain the length of the front matter instead of joining the array back together,
             * By slicing the response in res, you keep the formatting of the markdown.
             */
            const frontMatterLength = frontMatter.join().length;

            setFrontMatter(parseFrontMatterToArray(frontMatter));
            setBlog(res.slice(frontMatterLength));
          })
      )
      .catch(() => {});
  }, [currentBlogIndex, file]);

  if (!blog) return <Loader />;

  // TODO filter out all [[]] link tags before putting it into blog, add to a state and update them to create anchor tags instead.

  return (
    <CardWrapper className="w-7/12">
      <article>
        <h1 className="text-2xl capitalize text-accent-main underline">{title}</h1>
        <section className="my-6 flex flex-col gap-2 text-xs">
          {frontMatter?.tags?.length ? (
            <div className="flex items-center gap-2">
              Tags:
              {frontMatter?.tags.map((tag) => <Badge tag={tag} key={tag} />)}
            </div>
          ) : null}
          {frontMatter?.['date modified'] && (
            <p>
              Last Modified: <span className="italic">{frontMatter['date modified']}</span>
            </p>
          )}
          {frontMatter?.Aliases?.length ? (
            <div className="flex items-center gap-2">
              Aliases:
              {frontMatter?.Aliases.map((tag, i, a) => (
                <div key={tag} className="flex items-center gap-2">
                  {tag}
                  {i < a.length - 1 && ','}
                </div>
              ))}
            </div>
          ) : null}
        </section>
        <Markdown
          options={{
            wrapper: React.Fragment,
            overrides: {
              h1: { props: { className: 'text-2xl text-accent-main' } },
              h2: { props: { className: 'my-6 text-2xl underline text-accent-main/90' } },
              h3: { props: { className: 'my-4 text-lg text-accent-main/75' } },
              p: { props: { className: 'my-3 text-sm leading-6' } },
              a: { props: { className: 'text-accent-secondary underline' } },
              strong: { props: { className: 'text-accent-tertiary font-semibold' } },
              em: { props: { className: 'text-accent-tertiary/75' } },
              ul: { component: UnorderedListComponent, props: { className: 'ml-4 my-4' } },
              li: { component: ListComponent, props: { className: 'my-2' } },
              code: { component: CodeComponent },
            },
          }}
        >
          {blog}
        </Markdown>
      </article>
    </CardWrapper>
  );
};

export default Blog;
