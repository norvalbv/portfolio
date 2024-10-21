'use client';

import { classNames } from '@/src/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, File, Folder } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ReactElement, useState } from 'react';
import BlogNavigation, { TreeNode } from './BlogNavigation';
import { listS3Objects } from '@/lib/actions/listS3Objects';
import Link from 'next/link';

type TreeProps = {
  data: TreeNode;
};

const Tree = ({ data }: TreeProps): ReactElement => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(() => {
    if (data.type === 'folder') {
      return pathname.startsWith(`/blogs/notes/${data.url || ''}`);
    }
    return false;
  });
  const [children, setChildren] = useState<TreeNode[]>(data.children || []);

  const toggleOpen = async (): Promise<void> => {
    if (data.type === 'folder') {
      if (!isOpen && children.length === 0) {
        try {
          const objects = await listS3Objects(data.url);
          if (objects) {
            const newChildren: TreeNode[] = objects.map((object): TreeNode => {
              const key = object.Key || '';
              const name = key.split('/').pop() || '';
              const type = key.endsWith('/') ? 'folder' : 'file';

              return {
                name,
                type,
                url: key,
                children: type === 'folder' ? [] : undefined,
              };
            });
            setChildren(newChildren);
          }
        } catch (error) {
          console.error('Error fetching folder contents:', error);
        }
      }
      setIsOpen(!isOpen);
    }
  };

  const isActive = data.url && decodeURIComponent(pathname) === `/blogs/notes/${data.url.slice(0, -3)}`;

  if (data.type === 'blog') {
    return <BlogNavigation {...data} />;
  }

  return (
    <>
      <motion.div
        className={classNames(
          'flex cursor-pointer items-start rounded-md px-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700',
          isActive && 'bg-accent-tertiary/10 font-semibold'
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
        ) : (
          <File className="mr-2 mt-1 h-4 w-4 shrink-0 text-gray-500" />
        )}
        {data.type === 'file' ? (
          <Link href={`/blogs/notes/${data.url?.slice(0, -3)}`}>
            <span className={classNames("flex-1", isActive && "text-accent-primary")}>{data.name}</span>
          </Link>
        ) : (
          <span className="flex-1">{data.name}</span>
        )}
      </motion.div>
      <AnimatePresence initial={false}>
        {data.type === 'folder' && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 mt-1 flex flex-col gap-4 border-l border-gray-300 pl-2 dark:border-gray-600"
          >
            {children.map((childData) => (
              <Tree key={childData.url} data={childData} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tree;
