import React, { ReactElement } from 'react';
import Tree, { TreeNode } from './Tree';

type Props = {
  title: string;
  data: TreeNode[];
};

const FileTree = ({ title, data }: Props): ReactElement => {
  return (
    <div className="h-[calc(100vh-20rem)] w-72 overflow-scroll rounded-xl border border-light-text/50 bg-white p-4 shadow-lg dark:border-dark-text/50 dark:bg-dark-dark/30">
      <h2 className="mb-4 text-xl font-bold underline underline-offset-4">{title}</h2>
      {data.map((node, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tree key={`${node.name}-${index}`} data={node} />
      ))}
    </div>
  );
};

export default FileTree;
