import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import CardWrapper from 'components/CardWrapper';
import { useRandomReveal } from 'hooks/useRandomReveal';
import { BLOG_DESCRIPTION } from 'constants/index';

const blogs = [
  {
    title: 'How memory (RAM) works',
    subtitle: 'Honestly, how the F%&# does ram work?!',
    blog: 'how-memory-works',
  },
  {
    title: 'How memory (RAM) works',
    subtitle: 'Honestly, how the F%&# does ram work?!',
    blog: 'how-memory-works',
  },
];

const Blogs = (): ReactElement => {
  const hashedOutText = useRandomReveal({
    isPlaying: true,
    duration: 1000,
    characters: '123',
    updateInterval: 0.1,
    characterSet: ['!', '@', '$', '%', '&', '#'],
  });

  return (
    <CardWrapper className="mx-auto w-8/12">
      <Header
        title="Benji's Development Domain: A Journey Through my Mind"
        titleClassName="w-max border-b pb-2 text-5xl font-semibold break-all text-accent-main"
        subtitle="An insight to my mind; a bunch of technical blogs and notes that I have curated over time."
        subtitleClassName="text-xl my-6 italic"
        description={BLOG_DESCRIPTION}
        descriptionClassName="text-sm"
        animation={false}
      />
      <div className="flex flex-col gap-6 divide-y">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.blog}`} key={blog.title} className="pt-6">
            <Header
              className="mb-2"
              titleClassName="text-accent-secondary font-semibold underline text-2xl"
              title={`- ${blog.title}`}
              level={2}
              animation={false}
            />
            <p>Honestly, What the F{hashedOutText} is RAM?!</p>
          </Link>
        ))}
      </div>
    </CardWrapper>
  );
};

export default Blogs;
