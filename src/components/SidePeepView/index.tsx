import { motion, AnimatePresence } from 'framer-motion';
import Backdrop, { Props as BackdropProps } from '@/src/components/Backdrop';
import { ReactElement, SyntheticEvent } from 'react';
import { isSubmitKey } from '@/src/utils';
import { X } from 'lucide-react';

export type Props = {
  testId?: string;
  width?: number;
  onRest?: () => void;
} & BackdropProps;

const SidePeepView = ({
  isOpened,
  close,
  children,
  testId = '',
  width = 800,
  onRest,
}: Props): ReactElement => {
  /**
   * Do not close modal window if user clicks on the modal window.
   */
  const blockClosingModalWindow = (e: SyntheticEvent): void => {
    e.stopPropagation();
  };

  const sidePeepViewTestId = `${testId} Side Peep View`.trim();

  return (
    <Backdrop isOpened={isOpened} close={close} testId={testId}>
      <div className="relative z-50 min-h-screen max-w-[100vw] overflow-hidden">
        <AnimatePresence>
          {isOpened && (
            <motion.div
              className="absolute top-0 h-screen w-full border-r border-light-text/50 bg-light-neutral dark:border-dark-text/50 dark:bg-dark-neutral"
              onClick={blockClosingModalWindow}
              initial={{ left: -width }}
              animate={{ left: 0 }}
              exit={{ left: -width }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              style={{ maxWidth: width }}
              data-testid="Side Peep View"
              onAnimationComplete={onRest}
            >
              <div className="relative h-full overflow-y-auto" data-testid={sidePeepViewTestId}>
                <button
                  type="button"
                  onClick={close}
                  onKeyDown={(event): void => {
                    if (isSubmitKey(event)) {
                      close?.();
                    }
                  }}
                  className="group absolute right-4 top-4"
                  data-testid={`${sidePeepViewTestId} Close Button`}
                >
                  <X size={24} />
                  <span className="sr-only">Close blog menu</span>
                </button>
                <div className="px-6 pt-14">{children}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Backdrop>
  );
};

export default SidePeepView;
