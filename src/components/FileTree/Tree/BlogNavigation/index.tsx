import { AnimatePresence, motion } from 'framer-motion';
import { Brain, Clock, Info, Newspaper } from 'lucide-react';
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
  imagePath?: string;
};

type BlogNavigationProps = Pick<TreeNode, 'name' | 'subtitle' | 'metadata' | 'description'>;

export default function BlogNavigation({
  name,
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
          <Newspaper className="mr-2 h-4 w-4 shrink-0 text-accent-tertiary" />
          <span className="flex-1 font-medium">{name}</span>
        </div>
        {subtitle && (
          <p className="ml-6 text-xs text-light-text/90 dark:text-dark-text/90">{subtitle}</p>
        )}
        {metadata && (
          <p className="ml-6 text-xs text-light-text/75 dark:text-dark-text/75">
            Posted: {metadata['Date Posted']}
          </p>
        )}
      </div>
      <AnimatePresence>
        {isHovered && metadata && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 z-50 ml-4 w-72 rounded-lg bg-gray-800 p-4 shadow-lg"
          >
            <div className="space-y-2 text-xs">
              <div className="flex items-center text-gray-300">
                <Clock className="mr-2 h-4 w-4" />
                <span>{metadata['read time']}</span>
              </div>
              <div className="flex items-center">
                <Brain className="mr-2 h-4 w-4 text-gray-300" />
                <span>{metadata.level}</span>
              </div>
              {description && (
                <div className="flex items-start text-gray-300">
                  <Info className="mr-2 mt-1 h-4 w-4 shrink-0" />
                  <p>{description}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
