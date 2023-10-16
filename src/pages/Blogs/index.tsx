import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
import CardWrapper from 'components/CardWrapper';
import { convertToDate } from 'utils/date';
import allBlogs from 'constants/blogs';

type LevelCriteria = 'Beginner Friendly' | 'Intermediate' | 'Expert' | undefined;

export type BlogsType = {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  file: string;
  datePosted: number | string;
  readTime: number;
  level: LevelCriteria;
}[];

const Blogs = (): ReactElement => {
  // const hashedOutText = useRandomReveal({
  //   isPlaying: true,
  //   duration: 1000,
  //   characters: '#@%',
  //   updateInterval: 0.1,
  //   characterSet: ['!', '@', '$', '%', '&', '#'],
  // });

  return (
    <CardWrapper className="mx-auto w-10/12 md:w-8/12">
      <Header
        title="Benji's Development Domain: A Journey Through my Mind"
        titleClassName="border-b pb-3 text-xl md:text-3xl font-semibold text-accent-main"
        subtitle="An insight to my mind; a bunch of technical blogs and notes that I have curated over time."
        subtitleClassName="text-md md:text-xl mb-6 mt-3 italic"
        animation={false}
      />
      <div className="flex flex-col gap-6 divide-y">
        {allBlogs
          .sort((a, b) => {
            const dateA =
              typeof a.datePosted === 'string'
                ? new Date(a.datePosted.replace(/\w+,\s(\d+)\w+\s/, '$1 '))
                : new Date();
            const dateB =
              typeof b.datePosted === 'string'
                ? new Date(b.datePosted.replace(/\w+,\s(\d+)\w+\s/, '$1 '))
                : new Date();
            return dateB.getTime() - dateA.getTime();
          })
          .map((blog) => (
            <Link to={`/blog/${blog.url}`} key={blog.title} className="pt-6">
              <Header
                className="mb-2 md:w-8/12"
                titleClassName="text-accent-secondary font-semibold underline text-xl md:text-2xl"
                title={`- ${blog.title}`}
                description={blog.subtitle}
                descriptionClassName="text-sm mt-1"
                level={2}
                animation={false}
              />
              <p className="text-xs capitalize italic text-slate-500 dark:text-slate-400">
                {typeof blog.datePosted === 'string'
                  ? blog.datePosted
                  : convertToDate({
                      timestamp: blog.datePosted,
                      format: {
                        type: 'custom',
                        customValues: { day: 'numeric', month: 'long', year: 'numeric' },
                      },
                    })}{' '}
                • {blog.readTime} mintutes&nbsp;read {blog.level && `• ${blog.level}`}
              </p>
              {/* <p>Honestly, What the F{hashedOutText} is RAM?!</p> */}
            </Link>
          ))}
      </div>
    </CardWrapper>
  );
};

export default Blogs;
