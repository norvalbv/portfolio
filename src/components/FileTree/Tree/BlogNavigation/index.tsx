import { motion, AnimatePresence } from 'framer-motion';
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

export default function BlogNavigation({
  name,
  title,
  subtitle,
  metadata,
  description,
}: BlogNavigationProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <Newspaper className="mr-2 h-4 w-4 shrink-0 text-blue-500" />
          <span className="flex-1 font-medium text-gray-200">{name}</span>
        </div>
        {subtitle && <p className="ml-6 text-xs text-gray-400">{subtitle}</p>}
        {metadata && (
          <p className="ml-6 text-xs text-gray-500">Posted: {metadata['Date Posted']}</p>
        )}
      </div>
      <AnimatePresence>
        {isHovered && metadata && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 z-50 ml-4 w-64 rounded-md bg-gray-800 p-3 shadow-lg"
          >
            <h3 className="mb-2 text-sm font-bold text-gray-200">{title}</h3>
            <div className="gap-2 text-xs text-gray-300">
              <p>Read time: {metadata['read time']}</p>
              <p>Level: {metadata.level}</p>
              {description && <p className="mt-2 text-gray-400">Description: {description}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
