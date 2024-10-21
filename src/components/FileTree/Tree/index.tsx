'use client';

import { classNames } from '@/src/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, File, Folder } from 'lucide-react';
import { useParams } from 'next/navigation';
import { ReactElement, useState } from 'react';
import BlogNavigation, { TreeNode } from './BlogNavigation';

type TreeProps = {
  data: TreeNode;
};

const Tree = ({ data }: TreeProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const params = useParams();
  const isActive = data.url && params.slug?.[1] === data.url;

  return (
    <>
      <motion.div
        className={classNames(
          'flex cursor-pointer items-start rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700',
          isActive && 'bg-accent-tertiary/10',
        )}
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        {data.type === 'folder' && (
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1"
          >
            <ChevronRight className="mr-1 h-4 w-4" />
          </motion.div>
        )}
        {data.type === 'folder' ? (
          <Folder className="mr-2 mt-1 h-4 w-4 shrink-0 text-yellow-500" />
        ) : data.type === 'file' ? (
          <File className="mr-2 mt-1 h-4 w-4 shrink-0 text-gray-500" />
        ) : (
          <BlogNavigation
            name={data.name}
            subtitle={data.subtitle}
            metadata={data.metadata}
            description={data.description}
            url={data?.url}
          />
        )}
        {data.type !== 'blog' && <span className="flex-1">{data.name}</span>}
      </motion.div>
      <AnimatePresence initial={false}>
        {data.type === 'folder' && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 mt-1 border-l border-gray-300 pl-2 dark:border-gray-600"
          >
            {data.children?.map((childData) => (
              <Tree key={childData.id || childData.name} data={childData} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tree;
