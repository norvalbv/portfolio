import React, { ReactElement } from 'react';
import Tree, { TreeNode } from './Tree';

const fileTreeData: TreeNode = {
  name: 'root',
  type: 'folder',
  children: [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'index.js', type: 'file' },
        { name: 'styles.css', type: 'file' },
      ],
    },
    {
      name: 'public',
      type: 'folder',
      children: [
        { name: 'index.html', type: 'file' },
        { name: 'favicon.ico', type: 'file' },
      ],
    },
    { name: 'package.json', type: 'file' },
    { name: 'README.md', type: 'file' },
  ],
};

type Props = {
  title: string;
};

const FileTree = ({ title }: Props): ReactElement => {
  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <Tree data={fileTreeData} />
    </div>
  );
};

export default FileTree;
