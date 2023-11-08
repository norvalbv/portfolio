import Header from 'components/Header';
import { allBlogs } from 'constants/blogs';
import useTheme from 'hooks/useTheme';
import { ReactElement } from 'react';
import {
  DefTheme,
  Subtitle,
  Title,
  useTheme as useReactBlogsTheme,
  Description,
  Metadata,
  Blog,
} from 'react-blogs';
import { Link, useSearchParams } from 'react-router-dom';

const Blogs = (): ReactElement => {
  const { isDarkMode } = useTheme();

  const theme: DefTheme = {
    theme: isDarkMode ? 'FUNKY_TOWN' : 'GENTLE_GRAPE',
    overrides: {
      code: { theme: isDarkMode ? 'dracula' : 'oneLight' },
      metadata: { props: { className: 'text-xs md:text-sm flex gap-4 flex-wrap' } },
      p: { props: { className: 'my-4 tracking-wider text-sm' } },
      blockquote: { props: { className: 'italic border-l ml-4 pl-4' } },
      img: { props: { className: 'rounded-lg w-96 border border-2' } },
      ul: { props: { className: 'my-4 tracking-wider text-sm' } },
    },
  };

  useReactBlogsTheme(theme);

  allBlogs.sort((a, b) => {
    const regex = /(?<=\d)(?:st|nd|rd|th)\b/i;

    const metaA = a.metadata?.['date posted'].replace(regex, '');
    const dateA = new Date(metaA as string);

    const metaB = b.metadata?.['date posted'].replace(regex, '');
    const dateB = new Date(metaB as string);

    return dateB.getTime() - dateA.getTime();
  });

  const [searchParams] = useSearchParams();

  const id = allBlogs.find((blog) => blog.url === searchParams.get('blog'))?.id;
  return (
    <div className="z-10 mx-auto w-10/12 font-mono md:w-8/12">
      {searchParams.get('blog') ? (
        <Blog allBlogs={allBlogs} currentBlogId={id} paramKey="blog" />
      ) : (
        <>
          <Header
            title="Benji's Blogs"
            titleClassName="w-max border-b pb-2 text-3xl font-semibold md:text-6xl mb-6"
          />
          {allBlogs.map((blog) => (
            <Link key={blog.id} to={`/blogs/${blog.url}`} className="cursor-pointer">
              <Title>{blog.title}</Title>
              <Subtitle>{blog.subtitle}</Subtitle>
              <Description>{blog.description}</Description>
              <Metadata>{blog.metadata}</Metadata>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Blogs;
