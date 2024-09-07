'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, File, Folder } from 'lucide-react';
import { ReactElement, useState } from 'react';

export type TreeNode = {
  name: string;
  type: 'file' | 'folder';
  children?: TreeNode[];
};

type Props = {
  data: TreeNode;
};

const Tree = ({ data }: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        className="flex cursor-pointer items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:text-dark-dark"
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        {data.type === 'folder' && (
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="mr-1 h-4 w-4" />
          </motion.div>
        )}
        {data.type === 'folder' ? (
          <Folder className="mr-2 h-4 w-4 text-yellow-500" />
        ) : (
          <File className="mr-2 h-4 w-4 text-gray-500" />
        )}
        <span>{data.name}</span>
      </motion.div>
      <AnimatePresence initial={false}>
        {data.type === 'folder' && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 mt-1 overflow-hidden border-l border-gray-300 pl-2"
          >
            {data.children?.map((child, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tree key={`${child.name} ${index}`} data={child} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tree;
