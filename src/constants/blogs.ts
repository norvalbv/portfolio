import { BlogsType } from 'pages/Blogs';

// TODO Update Obsidian to support these data points in the blogs front matter
// This will allow for dynamic imports and save holding all blog data in a constant
const blogs: BlogsType = [
  {
    id: 'Memory (RAM)',
    file: 'memory',
    title: 'How Memory (RAM) Works',
    subtitle: 'A deep insight to what RAM is and how it interacts with the computer.',
    readTime: 20,
    level: 'Beginner Friendly',
    url: 'how-memory-works',
    datePosted: 'Monday, 28th August 2023',
  },
  {
    id: 'Memory Heap',
    file: 'memory-heap',
    title: 'What is the Memory Heap?',
    subtitle: 'A deep insight to what RAM is and how it interacts with the computer.',
    readTime: 6,
    level: 'Beginner Friendly',
    url: 'memory-heap',
    datePosted: 'Thursday, 31st August 2023',
  },
];

export default blogs;
