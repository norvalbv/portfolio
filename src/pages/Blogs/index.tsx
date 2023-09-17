import React, { ReactElement } from 'react';
import Blog from 'react-blogs';
import { DefBlogs } from 'react-blogs/types';

const Blogs = (): ReactElement => {
  const allBlogs: DefBlogs[] = [
    {
      id: 'how-memory-works',
      file: '../../assets/blogs/memory.md',
      title: 'How Memory (RAM) Works',
      subtitle: 'A deep insight to what RAM is and how it interacts with the computer.',
      url: 'how-memory-works',
      containsFrontMatter: true,
      frontMatterPosition: 'top',
      metadata: {
        'read time': 20,
        level: 'Beginner Friendly',
        'date posted': 'Monday, 30th August 2023',
      },
    },
    {
      id: 'memory',
      file: '../../assets/blogs/memory-heap.md',
      title: 'How Memory (RAM) Wo22rks',
      subtitle: 'A deep insight to what RAM is and how it interacts with the computer.',
      url: 'how-memory-works',
      metadata: {
        'read time': 20,
        level: 'Beginner Friendly',
        'date posted': 'Monday, 29th August 2023',
      },
    },
  ];

  const headers = { title: '' };

  return <Blog allBlogs={allBlogs} paramKey="hi" />;
};

export default Blogs;
