import React, { ReactElement, useEffect, useState } from 'react';
import CardWrapper from 'components/CardWrapper';
import Markdown from 'markdown-to-jsx';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import { blogs } from '..';

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
    <CardWrapper className="w-8/12">
      <article>
        <h1 className="text-2xl text-accent-main underline">{title}</h1>
        <Markdown
          options={{
            overrides: {
              h1: { props: { className: 'my-10 text-2xl text-accent-main' } },
              h2: { props: { className: 'my-6 text-xl underline' } },
              h3: { props: { className: 'my-4 text-lg underline' } },
              p: { props: { className: 'mb-4' } },
              a: { props: { className: 'text-accent-secondary' } },
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
