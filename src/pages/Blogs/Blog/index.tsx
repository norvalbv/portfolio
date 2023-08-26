import React, { ReactElement, useEffect, useState } from 'react';
import CardWrapper from 'components/CardWrapper';
import Markdown from 'markdown-to-jsx';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import { blogs } from '..';

const UnorderedListComponent = ({
  children,
  ...props
}: {
  children: JSX.Element;
}): ReactElement => <ul {...props}>{children}</ul>;

const ListComponent = ({ children, ...props }: { children: JSX.Element }): ReactElement => (
  <ul {...props}>&bull; {children}</ul>
);

const Blog = (): ReactElement => {
  const [blog, setBlog] = useState<string | null>(null);
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
          .then((res) => setBlog(res))
      )
      .catch(() => {});
  }, [currentBlogIndex, file]);

  if (!blog) return <Loader />;

  return (
    <CardWrapper className="w-7/12">
      <article>
        <h1 className="text-2xl capitalize text-accent-main underline">{title}</h1>
        <Markdown
          options={{
            wrapper: React.Fragment,
            overrides: {
              h1: { props: { className: 'my-10 text-2xl text-accent-main' } },
              h2: { props: { className: 'my-6 text-2xl underline text-accent-main/90' } },
              h3: { props: { className: 'my-4 text-lg text-accent-main/75' } },
              p: { props: { className: 'my-3 text-sm leading-6' } },
              a: { props: { className: 'text-accent-secondary underline' } },
              strong: { props: { className: 'text-accent-tertiary font-semibold text-base' } },
              em: { props: { className: 'text-accent-tertiary/75' } },
              ul: { component: UnorderedListComponent, props: { className: 'ml-4 my-4' } },
              li: { component: ListComponent, props: { className: 'my-2' } },
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
