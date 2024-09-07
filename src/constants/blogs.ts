import { TreeNode } from 'components/FileTree/Tree/BlogNavigation';

export const blogTreeData: TreeNode[] = [
  {
    name: 'How Memory (RAM) Works',
    type: 'blog',
    id: 'Memory (RAM)',
    file: '/blogs/memory.md',
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
    name: 'Call Stack',
    type: 'blog',
    id: 'Call Stack',
    file: '/blogs/call-stack.md',
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
    name: 'Legal ramifications with web accessibility',
    type: 'blog',
    id: 'Legal ramifications with web accessibility',
    file: '/blogs/legal-ramifications-with-web-accessibility.md',
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
];
