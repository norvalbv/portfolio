import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'How memory (RAM) works',
    subtitle: 'Honestly, how the F%&# does ram work?!',
    blog: 'how-memory-works',
  },
];

const Blogs = (): ReactElement => {
  return (
    <div className="relative min-h-screen text-center uppercase">
      <Header
        title="Benji's Development Domain: A Journey Through Code"
        level={2}
        subtitle="An insight to my mind, a bunch of technical blogs and notes"
        animation={false}
      />
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.blog}`} key={blog.title}>
          <Header
            className="mb-10"
            titleClassName="text-accent-secondary"
            title={blog.title}
            level={3}
            subtitle={blog.subtitle}
            animation={false}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
