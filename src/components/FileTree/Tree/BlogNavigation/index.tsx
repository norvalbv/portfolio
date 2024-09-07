import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import React, { ReactElement, useState } from 'react';

export type TreeNode = {
  name: string;
  id?: string;
  file?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  url?: string;
  frontMatter?: { showFrontMatter: boolean };
  metadata?: {
    'read time': string;
    level: string;
    'Date Posted': string;
  };
  type: 'file' | 'folder' | 'blog';
  children?: TreeNode[];
};

type BlogNavigationProps = Pick<
  TreeNode,
  'name' | 'title' | 'subtitle' | 'metadata' | 'description'
>;

const BlogNavigation = ({
  name,
  title,
  subtitle,
  metadata,
  description,
}: BlogNavigationProps): ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <Newspaper className="mr-2 h-4 w-4 shrink-0 text-blue-500" />
          <span className="flex-1">{name}</span>
        </div>
        {subtitle && (
          <p className="ml-6 mt-1 text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        {metadata && (
          <p className="ml-6 mt-1 text-xs text-gray-500 dark:text-gray-400">
            Posted: {metadata['Date Posted']}
          </p>
        )}
      </div>
      {isHovered && metadata && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full z-10 mt-2 w-64 rounded-md bg-white p-2 shadow-lg dark:bg-gray-800"
        >
          <h3 className="mb-1 text-sm font-bold">{title}</h3>
          <div className="text-xs">
            <p>Read time: {metadata['read time']}</p>
            <p>Level: {metadata.level}</p>
            <p>Description: {description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogNavigation;
