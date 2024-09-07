import { TreeNode } from 'components/FileTree/Tree';

export const fileTreeData: TreeNode[] = [
  {
    name: 'Business',
    type: 'folder',
    children: [],
  },
  {
    name: 'Coding',
    type: 'folder',
    children: [
      {
        name: 'Accessibility',
        type: 'folder',
        children: [],
      },
      {
        name: 'API Management',
        type: 'folder',
        children: [],
      },
      {
        name: 'AWS',
        type: 'folder',
        children: [],
      },
      {
        name: 'Best Practices',
        type: 'folder',
        children: [
          {
            name: 'Frontend best practices',
            type: 'folder',
            children: [],
          },
        ],
      },
      {
        name: 'Bundling, building and server starts',
        type: 'folder',
        children: [],
      },
      {
        name: 'Compression',
        type: 'folder',
        children: [
          { name: 'Compression', type: 'file' },
          { name: 'Lossless vs lossy compression', type: 'file' },
        ],
      },
      {
        name: 'Compute',
        type: 'folder',
        children: [
          {
            name: 'Containers',
            type: 'folder',
            children: [],
          },
          {
            name: 'Virtual Machines',
            type: 'folder',
            children: [],
          },
          { name: 'Container vs Hypervisor', type: 'file' },
          { name: 'Containers, VMs and Serverless', type: 'file' },
          { name: 'Image', type: 'file' },
        ],
      },
      {
        name: 'Devops',
        type: 'folder',
        children: [
          {
            name: 'Pipelines',
            type: 'folder',
            children: [],
          },
        ],
      },
      {
        name: 'Express',
        type: 'folder',
        children: [],
      },
      {
        name: 'General',
        type: 'folder',
        children: [],
      },
      {
        name: 'JavaScript',
        type: 'folder',
        children: [],
      },
      {
        name: 'Networking',
        type: 'folder',
        children: [
          {
            name: 'Protocols',
            type: 'folder',
            children: [],
          },
          { name: 'Load balancers', type: 'file' },
          { name: 'Middleware', type: 'file' },
          { name: 'REST', type: 'file' },
          { name: 'REST PATCH vs PUT vs POST', type: 'file' },
          { name: 'URI vs URL vs URN', type: 'file' },
        ],
      },
      {
        name: 'Node',
        type: 'folder',
        children: [],
      },
      {
        name: 'Python',
        type: 'folder',
        children: [],
      },
      {
        name: 'Security and compliance',
        type: 'folder',
        children: [],
      },
      {
        name: 'SEO',
        type: 'folder',
        children: [],
      },
      {
        name: 'SSR, CSR, and ecosystem',
        type: 'folder',
        children: [
          {
            name: 'Next.JS',
            type: 'folder',
            children: [
              { name: 'Client Components vs Server Components', type: 'file' },
              { name: 'Next.JS', type: 'file' },
            ],
          },
          { name: 'React Sever Components Vs SSR', type: 'file' },
          { name: 'SSG vs SSR vs SPA', type: 'file' },
        ],
      },
      {
        name: 'Storage and Databases',
        type: 'folder',
        children: [],
      },
      { name: 'Frontend', type: 'file' },
    ],
  },
];
