import React, { ReactElement, useEffect, useState } from 'react';
import Tree from './Tree';
import { TreeNode } from './Tree/BlogNavigation';
import Loader from '../Loader';

type Props = {
  title: string;
  data: TreeNode[];
  loading?: boolean;
};

const FileTree = ({ title, data, loading }: Props): ReactElement => {
  const [treeData, setTreeData] = useState<TreeNode[]>([]);

  useEffect(() => {
    const buildTree = (flatData: TreeNode[]): TreeNode[] => {
      const root: TreeNode[] = [];
      const map: Record<string, TreeNode> = {};

      flatData.forEach((node) => {
        if (node.type === 'blog') {
          // For blog nodes, add them directly to the root
          root.push(node);
        } else {
          const parts = node.url?.split('/').filter(Boolean) || [];
          let currentLevel = root;

          parts.forEach((part, index) => {
            const isLastPart = index === parts.length - 1;
            const currentPath = parts.slice(0, index + 1).join('/');
            
            if (!map[currentPath]) {
              const newNode: TreeNode = {
                name: part,
                type: isLastPart ? node.type : 'folder',
                url: currentPath,
                children: [],
              };
              map[currentPath] = newNode;

              if (currentLevel === root) {
                root.push(newNode);
              } else {
                const parentPath = parts.slice(0, index).join('/');
                const parent = map[parentPath];
                if (parent && parent.children) {
                  parent.children.push(newNode);
                }
              }
            }

            currentLevel = map[currentPath].children as TreeNode[];
          });

          // Add any additional properties from the original node
          if (node.url) {
            Object.assign(map[node.url], node);
          }
        }
      });

      return root;
    };

    setTreeData(buildTree(data));
  }, [data]);

  return (
    <div className="relative h-[calc(100vh-18rem)] w-72 overflow-visible">
      <div className="absolute inset-0 overflow-y-auto overflow-x-visible rounded-xl border border-light-text/50 bg-white p-4 shadow-lg dark:border-dark-text/50 dark:bg-dark-dark/30">
        <h2 className="mb-4 text-xl font-bold underline underline-offset-4">{title}</h2>
        <div className="flex flex-col gap-4">
          {loading ? (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          treeData.map((node, index) => (
            <Tree key={`${node.name}-${index}`} data={node} />
          ))
        )}
        </div>

      </div>
    </div>
  );
};

export default FileTree;
