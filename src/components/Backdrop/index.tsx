import { AnimatePresence, motion } from 'framer-motion';
import useTheme from 'hooks/useTheme';
import React, { KeyboardEvent, ReactNode, ReactPortal, useEffect } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { isExitKey } from 'utils';
import classNames from 'utils/classNames';

export type Props = {
  children: ReactNode;
  dimmedBackground?: boolean;
  isOpened: boolean;
  close?: () => void;
  className?: string;
  testId?: string;
};

const Backdrop = ({
  children,
  close,
  dimmedBackground = true,
  isOpened,
  className = 'z-50 w-screen inset-0',
  testId = '',
}: Props): ReactPortal | null => {
  useEffect(() => {
    document.body.style.overflow = isOpened ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      close?.();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    event.stopPropagation();
    if (isExitKey(event)) {
      close?.();
    }
  };

  const { isDarkMode } = useTheme();

  const container = typeof document !== 'undefined' && document.getElementById('backdrop');
  if (!container) return null;

  return createPortal(
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className={classNames(
            'fixed h-screen overflow-y-auto overscroll-contain',
            { 'bg-black/75': dimmedBackground, dark: isDarkMode },
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          data-testid={`${testId} Backdrop`.trim()}
        >
          <FocusLock className="relative h-full overflow-y-auto text-light-text dark:text-dark-text">
            {/* Allows focusing immediately without focusing the close button on open. This is for styling preferences. */}
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div tabIndex={0} aria-label="Popup" className="sr-only" data-testid="Initial Focus" />
            {children}
          </FocusLock>
        </motion.div>
      )}
    </AnimatePresence>,
    container
  ) as React.ReactPortal;
};

export default Backdrop;
