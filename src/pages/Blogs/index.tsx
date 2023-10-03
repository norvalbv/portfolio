import Header from 'components/Header';
import React, { ReactElement } from 'react';
import Blog, { DefBlogs } from 'react-blogs';
import { useSearchParams } from 'react-router-dom';

const Blogs = (): ReactElement => {
  const [searchParams] = useSearchParams();

  const allBlogs: DefBlogs = {
    style: '',
    blogs: [
      {
        id: 'how-memory-works',
        file: '/src/assets/blogs/memory.md',
        title: { text: 'How Memory (RAM) Works' },
        subtitle: { text: 'A deep insight to what RAM is and how it interacts with the computer.' },
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
        file: '/src/assets/blogs/memory.md',
        title: { text: 'How Memory (RAM) Wo1232rks' },
        url: 'how-memory-works',
        containsFrontMatter: true,
        metadata: {
          'read time': 20,
          level: 'Beginner Friendly',
          'date posted': 'Monday, 29th August 2023',
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-8/12 font-mono text-2xl">
      {!searchParams.get('blog') && <Header title="Benji's Blogs" />}
      <Blog allBlogs={allBlogs} paramKey="blog" theme="DARK_THEME" />
    </div>
  );
};

export default Blogs;
