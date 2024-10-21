import React, { ReactElement } from 'react';
import Tree from './Tree';
import { TreeNode } from './Tree/BlogNavigation';

type Props = {
  title: string;
  data: TreeNode[];
};

const FileTree = ({ title, data }: Props): ReactElement => {
  return (
    <div className="relative h-[calc(100vh-18rem)] w-72 overflow-visible">
      <div className="absolute inset-0 overflow-y-auto overflow-x-visible rounded-xl border border-light-text/50 bg-white p-4 shadow-lg dark:border-dark-text/50 dark:bg-dark-dark/30">
        <h2 className="mb-4 text-xl font-bold underline underline-offset-4">{title}</h2>
        {data.map((node, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tree key={`${node.name}-${index}`} data={node} />
        ))}
      </div>
    </div>
  );
};

export default FileTree;
