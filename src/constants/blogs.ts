import { ReactNode } from 'react';

export type BlogType = {
  accessor?: ReactNode;
  description?: string;
  file: string | URL;
  frontMatter?: {
    showFrontMatter?: boolean;
    delimiter?: string;
    position?: 'start' | 'end';
  };
  imagePath?: string;
  metadata?: Record<string, string>;
  readonly id: string;
  subtitle?: string;
  title: string;
  url: string;
};

type DefBlogs = BlogType[];

export const allBlogs: DefBlogs = [
  {
    id: 'Memory (RAM)',
    file: '/blogs/memory.md',
    // ! Classnames not working.
    title: 'How Memory (RAM) Works',
    subtitle: 'A deep insight to what RAM is and how it interacts with the computer.',
    url: 'how-memory-works',
    frontMatter: { showFrontMatter: true },
    metadata: {
      'read time': '20 minutes',
      level: '🧠',
      'Date Posted': 'Friday, 22nd September 2023',
    },
  },
  {
    id: 'Call Stack',
    file: '/blogs/call-stack.md',
    // ! Classnames not working.
    title: 'Call Stack',
    subtitle: 'A quick overview of what the call stack is.',
    description:
      "For a more in depth overview of the differentiations between call stack and memory heap check out the my blog about 'The Event Loop in JavaScript'. (coming soon)",
    imagePath: '/blogImages/callStack',
    metadata: {
      'read time': '4 minutes',
      level: '🧠',
      'Date Posted': 'Tuesday, 31th October 2023',
    },
    url: 'call-stack',
  },
  {
    id: 'Legal ramifications with web accessibility',
    file: '/blogs/legal-ramifications-with-web-accessibility.md',
    // ! Classnames not working.
    title: 'Legal ramifications with web accessibility',
    subtitle: 'A quick analysis of why you need to have an accessible website.',
    description: 'This blog mainly covers UK law',
    metadata: {
      'read time': '7 minutes',
      level: '🧠',
      'Date Posted': 'Thursday, 16th November 2023',
    },
    url: 'web-accessibility',
  },
  // {
  //   id: 'Asynchronous JavaScript',
  //   file: '/blogs/asynchronous-javascript.md',
  //   // ! Classnames not working.
  //   title: 'Asynchronous JavaScript',
  //   metadata: {
  //     'read time': '20 minutes',
  //     level: '🧠🧠',
  //     'Date Posted': 'Saturday, 16th December 2023',
  //   },
  //   url: 'asynchronous-javascript',
  // },
];
