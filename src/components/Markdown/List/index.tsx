import { ReactElement } from 'react';

const List = ({ children, ...props }: { children: ReactElement[] }): ReactElement => (
  <li
    {...props}
    className="mb-2 flex items-start gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
  >
    <span
      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary"
      aria-hidden="true"
      role="presentation"
    />
    <span className="flex-1">{children}</span>
  </li>
);

export default List;
