import ContactMe from 'components/ContactMe';
import { allBlogs } from 'constants/blogs';
import useTheme from 'hooks/useTheme';
import { ReactElement } from 'react';
import { Blog, useTheme as useReactBlogsTheme } from 'react-blogs';
import { useLocation } from 'react-router-dom';

const BlogPage = (): ReactElement | null => {
  const { isDarkMode } = useTheme();

  const { pathname } = useLocation();

  const theme = {
    theme: isDarkMode ? 'SHADES_OF_PURPLE' : 'SHADES_OF_GREEN',
    overrides: {
      code: { theme: isDarkMode ? 'dracula' : 'oneLight' },
      clipboard: {
        show: true,
        callback: () => console.log('yup'),
        // props: { className: 'h-40' },
      },
      metadata: { props: { className: 'text-xs md:text-sm flex gap-4 flex-wrap' } },
      p: { props: { className: 'my-4 tracking-wider text-sm' } },
      blockquote: { props: { className: 'italic border-l ml-4 pl-4' } },
      img: { props: { className: 'rounded-lg w-96 border border-2' } },
    },
  };

  useReactBlogsTheme(theme);

  const id = allBlogs.find((blog) => blog.url === pathname.slice(7))?.id;

  if (!id) return null;

  return (
    <div className="z-10 mx-auto w-10/12 font-mono md:w-8/12">
      <Blog allBlogs={allBlogs} currentBlogId={id} />
      <hr className="h-0.5 bg-fuchsia-50" />
      <ContactMe />
    </div>
  );
};

export default BlogPage;
