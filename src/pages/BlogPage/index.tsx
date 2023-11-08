import ContactMe from 'components/ContactMe';
import { allBlogs } from 'constants/blogs';
import useTheme from 'hooks/useTheme';
import { ReactElement } from 'react';
import { DefTheme, Blog, useTheme as useReactBlogsTheme } from 'react-blogs';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const BlogPage = (): ReactElement | null => {
  const { isDarkMode } = useTheme();

  const { pathname } = useLocation();

  const theme: DefTheme = {
    theme: isDarkMode ? 'FUNKY_TOWN' : 'GENTLE_GRAPE',
    overrides: {
      code: { theme: isDarkMode ? 'dracula' : 'oneLight' },
      clipboard: {
        callback: () => toast.success('Code copied to clipboard.'),
      },
      metadata: { props: { className: 'text-xs md:text-sm flex gap-4 flex-wrap' } },
      p: { props: { className: 'my-4 tracking-wider text-sm' } },
      blockquote: { props: { className: 'italic border-l ml-4 pl-4' } },
      img: { props: { className: 'rounded-lg w-96 border border-2' } },
      ul: { props: { className: 'my-4 tracking-wider text-sm' } },
      strong: {
        props: { className: !isDarkMode ? 'text-[#af79c8] text-sm' : 'text-[#547f7c] text-sm' },
      },
      em: {
        props: { className: !isDarkMode ? 'text-[#af79c8] text-sm' : 'text-[#547f7c] text-sm' },
      },
      a: {
        props: {
          className: !isDarkMode
            ? 'text-[#af79c8] text-sm underline'
            : 'text-[#547f7c] text-sm underline',
        },
      },
    },
  };

  useReactBlogsTheme(theme);

  const id = allBlogs.find((blog) => blog.url === pathname.slice(7))?.id;

  if (!id) return null;

  return (
    <div className="z-10 mx-auto w-10/12 scroll-smooth font-mono md:w-8/12">
      <Blog allBlogs={allBlogs} currentBlogId={id} />
      <hr className="h-0.5 bg-fuchsia-50" />
      <ContactMe />
    </div>
  );
};

export default BlogPage;
