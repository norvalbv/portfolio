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
      id: 'how-memory-works',
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
        'date posted': 'Monday, 28th August 2023',
      },
    },
    // {
    //   id: 'Memory Heap',
    //   file: '/src/assets/blogs/memory-heap.md',
    //   title: { label: 'What is memory heap?' },
    //   url: 'memory-heap',
    //   frontMatter: { showFrontMatter: true },
    //   metadata: {
    //     'read time': '6 minutes',
    //     level: '🧠🧠',
    //     'date posted': 'Monday, 29th August 2023',
    //   },
    // },
  ];

  const theme: DefTheme = {
    theme: 'SHADES_OF_GREEN',
    code: isDarkMode ? 'dracula' : 'oneLight',
    overrides: {
      metadata: {
        props: { className: 'text-xs md:text-sm flex gap-2' },
      },
      p: {
        props: { className: 'text-xs my-4 tracking-wider md:text-sm' },
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
