import Header from 'components/Header';
import React, { ReactElement } from 'react';
import Blog, { DefBlogs } from 'react-blogs';
import { useSearchParams } from 'react-router-dom';

const Blogs = (): ReactElement => {
  const [searchParams] = useSearchParams();

  const allBlogs: DefBlogs = [
    {
      id: 'how-memory-works',
      file: '/src/assets/blogs/memory.md',
      title: { text: 'How Memory (RAM) Works' },
      subtitle: { text: 'A deep insight to what RAM is and how it interacts with the computer.' },
      url: 'how-memory-works',
      showFrontMatter: true,
      metadata: {
        'read time': '20 minutes',
        level: 'Beginner Friendly',
        'date posted': 'Monday, 28th August 2023',
      },
    },
    {
      id: 'Memory Heap',
      file: '/src/assets/blogs/memory-heap.md',
      title: { text: 'What is memory heap?' },
      url: 'memory-heap',
      showFrontMatter: true,
      metadata: {
        'read time': '6 minutes',
        level: 'Intermediate',
        'date posted': 'Monday, 29th August 2023',
      },
    },
  ];

  allBlogs.sort((a, b) => {
    const regex = /(?<=\d)(?:st|nd|rd|th)\b/i;

    const metaA = a.metadata?.['date posted'].replace(regex, '');
    const dateA = new Date(metaA);

    const metaB = b.metadata?.['date posted'].replace(regex, '');
    const dateB = new Date(metaB);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="mx-auto w-8/12 font-mono text-2xl">
      {!searchParams.get('blog') && <Header title="Benji's Blogs" />}
      <Blog allBlogs={allBlogs} style="github" />
    </div>
  );
};

export default Blogs;
