import { fileTreeData } from '__mocks__/fileTreeData';
import React, { ReactElement } from 'react';
import Tree from './Tree';

type Props = {
  title: string;
};

const FileTree = ({ title }: Props): ReactElement => {
  return (
    <div className="w-72 rounded-xl border border-light-text/50 bg-white p-4 shadow-md dark:border-dark-text/50 dark:bg-dark-dark/30">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <Tree data={fileTreeData} />
    </div>
  );
};

export default FileTree;
