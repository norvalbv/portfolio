import { TreeNode } from '@/src/components/FileTree/Tree/BlogNavigation';

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
      'Date Posted': 'Friday, 1st March 2024',
    },
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
      'Date Posted': 'Thursday, 7th May 2024',
    },
    url: 'web-accessibility',
  },
  {
    name: 'Memory Heap',
    type: 'blog',
    id: 'Memory Heap',
    file: '/blogs/memory-heap.md',
    title: 'Memory Heap',
    subtitle: 'A quick overview of what the memory heap is.',
    description:
      'Explore memory management through the memory heap, its differences from stack memory, and its role in dynamic allocation across programming languages.',
    imagePath: '/blogImages/memoryHeap',
    metadata: {
      'read time': '10 minutes',
      level: '🧠🧠',
      'Date Posted': 'Tuesday, 10th July 2024',
    },
    url: 'memory-heap',
  },
];
