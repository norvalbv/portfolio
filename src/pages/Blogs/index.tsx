import React, { ReactElement } from 'react';
import Blog, { DefBlogs } from 'react-blogs';

const Blogs = (): ReactElement => {
  const allBlogs: DefBlogs = {
    style: '',
    blogs: [
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
    ],
  };

  return (
    <div className="mx-auto w-8/12">
      <Blog allBlogs={allBlogs} paramKey="hi" theme="LIGHT_THEME" />
    </div>
  );
};

export default Blogs;
