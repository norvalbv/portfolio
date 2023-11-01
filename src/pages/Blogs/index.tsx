import ContactMe from 'components/ContactMe';
import Header from 'components/Header';
import useTheme from 'hooks/useTheme';
import React, { ReactElement } from 'react';
import Blog, { DefBlogs, DefTheme } from 'react-blogs';
import { useSearchParams } from 'react-router-dom';

const Blogs = (): ReactElement => {
  const [searchParams] = useSearchParams();

  const { isDarkMode } = useTheme();

  const allBlogs: DefBlogs = [
    {
      id: 'Memory (RAM)',
      file: '/blogs/memory.md',
      // ! Classnames not working.
      title: { label: 'How Memory (RAM) Works' },
      subtitle: {
        label: 'A deep insight to what RAM is and how it interacts with the computer.',
      },
      url: 'how-memory-works',
      frontMatter: { showFrontMatter: true },
      metadata: {
        'read time': '20 minutes',
        level: '🧠',
        'date posted': 'Friday, 22nd September 2023',
      },
    },
    {
      id: 'Call Stack',
      file: '/blogs/call-stack.md',
      // ! Classnames not working.
      title: { label: 'Call Stack' },
      subtitle: { label: 'A quick overview of what the call stack is.' },
      description: {
        label:
          "For a more in depth overview of the differentiations between call stack and memory heap check out the my blog about 'The Event Loop in JavaScript'. (coming soon)",
      },
      metadata: {
        'read time': '4 minutes',
        level: '🧠',
        'date posted': 'Tuesday, 31th October 2023',
      },
      url: 'call-stack',
    },
  ];

  const theme: DefTheme = {
    theme: 'SHADES_OF_GREEN',
    code: isDarkMode ? 'dracula' : 'oneLight',
    overrides: {
      metadata: {
        props: { className: 'text-xs md:text-sm flex gap-2' },
      },
      p: {
        props: { className: 'my-4 tracking-wider text-sm' },
      },
      blockquote: {
        props: { className: 'italic border-l ml-4 pl-4' },
      },
    },
  };

  allBlogs.sort((a, b) => {
    const regex = /(?<=\d)(?:st|nd|rd|th)\b/i;

    const metaA = a.metadata?.['date posted'].replace(regex, '');
    const dateA = new Date(metaA as string);

    const metaB = b.metadata?.['date posted'].replace(regex, '');
    const dateB = new Date(metaB as string);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="mx-auto w-10/12 font-mono md:w-8/12">
      {!searchParams.get('blog') && (
        <Header
          title="Benji's Blogs"
          titleClassName="w-max border-b pb-2 text-3xl font-semibold md:text-6xl mb-6"
        />
      )}
      <Blog allBlogs={allBlogs} theme={theme} />

      {searchParams.get('blog') && (
        <>
          <hr className="h-0.5 bg-fuchsia-50" />
          <ContactMe />
        </>
      )}
    </div>
  );
};

export default Blogs;
