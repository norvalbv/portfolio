import { AnimatePresence, motion } from 'framer-motion';
import { Brain, Clock, Info, Newspaper } from 'lucide-react';
import Link from 'next/link';
import React, { ReactElement, useState, useRef, useEffect } from 'react';

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

type BlogNavigationProps = Pick<TreeNode, 'name' | 'subtitle' | 'metadata' | 'description' | 'url'>;

export default function BlogNavigation({
  name,
  subtitle,
  metadata,
  description,
  url,
}: BlogNavigationProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const blogItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isHovered && blogItemRef.current) {
      const rect = blogItemRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + 16, // 16px offset from the right edge
      });
    }
  }, [isHovered]);

  return (
    <Link
      href={`/blogs/blog/${url || ''}`}
      ref={blogItemRef}
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 w-72 rounded-lg bg-gray-800 p-4 shadow-lg"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
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
    </Link>
  );
}
