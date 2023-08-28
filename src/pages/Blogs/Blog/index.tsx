import React, { ReactElement, useEffect, useState } from 'react';
import CardWrapper from 'components/CardWrapper';
import Markdown from 'markdown-to-jsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arta } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useTheme from 'hooks/useTheme';
import Badge from 'components/Badge';
import processLink from 'utils/processLinks';
import blogs from 'constants/blogs';

type FrontMatter = {
  Aliases: string[] | null;
  'date created': string | null;
  'date modified': string | null;
  'review-frequency': string | null;
  tags: string[] | null;
  title: string | null;
};

const processFrontMatter = (lines: string[]): FrontMatter => {
  const obj: FrontMatter = {
    Aliases: [],
    'date created': null,
    'date modified': null,
    'review-frequency': null,
    tags: [],
    title: null,
  };

  let currentKey: keyof FrontMatter;

  lines.forEach((line) => {
    if (line.startsWith('---')) {
      // Skip the delimiter lines
      return;
    }

    // splitLine will produce more than one value in an array if there is a key value pair, i.e., the only option that doesn't produce this is values for tags or aliases.
    const splitLine = line.split(':');

    if (splitLine.length > 1) {
      // The Key is always 0th index.
      currentKey = splitLine[0].trim() as keyof FrontMatter;
      const value = splitLine.slice(1).join(':').trim();

      if (value.startsWith('[' || !value)) {
        // Initialize an array for later
        obj[currentKey] = null;
      } else if (value) {
        (obj[currentKey] as string) = value;
      }
    } else if (currentKey && Array.isArray(obj[currentKey])) {
      const listItem = line.replace(/^-/, '').trim();
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

const ListComponent = ({ children, ...props }: { children: JSX.Element[] }): ReactElement => (
  <li {...props} style={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
    <span className={children[0].type === 'p' ? 'mt-3' : ''}>&bull;</span>
    <div>{children}</div>
  </li>
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
        margin: '8px 0 8px 0',
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

  const navigate = useNavigate();

  const currentBlog = blogs[currentBlogIndex] ? blogs[currentBlogIndex] : null;
  /**
   * Dynamically import blogs based on the current blog URL.
   */
  useEffect(() => {
    if (!currentBlog) {
      return navigate('not-found');
    }
    const { file } = currentBlog;
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

            setFrontMatter(processFrontMatter(frontMatter));

            const processedLinks = processLink(res);

            const lastIndexOfDivide = processedLinks.lastIndexOf('---');

            setBlog(processedLinks.slice(frontMatterLength, lastIndexOfDivide));
          })
      )
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBlogIndex, currentBlog]);

  if (!blog) return <Loader />;

  return (
    <CardWrapper className="w-7/12">
      <article>
        <h1 className="text-2xl capitalize text-accent-main underline">{currentBlog?.title}</h1>
        <section className="my-6 flex flex-col gap-2 text-xs">
          {frontMatter?.tags?.length ? (
            <div className="flex items-center gap-2">
              Tags:
              {frontMatter?.tags.map((tag) => <Badge tag={tag} key={tag} />)}
            </div>
          ) : null}
          {frontMatter?.['date modified'] && (
            <p>
              Last Modified:{' '}
              <span className="italic">
                {frontMatter['date modified'].slice(
                  0,
                  frontMatter['date modified'].lastIndexOf(',')
                )}
              </span>
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
      <section className="mt-10 flex items-center gap-4 border-t pt-4 text-sm">
        <p>Any comments about this blog?</p>
        <Link to="/contact" className="text-accent-secondary underline">
          Contact Me
        </Link>
      </section>
    </CardWrapper>
  );
};

export default Blog;
