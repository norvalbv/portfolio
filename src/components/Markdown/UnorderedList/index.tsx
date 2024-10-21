import { ReactElement } from 'react';

const UnorderedList = ({ children, ...props }: { children: ReactElement }): ReactElement => (
  <ul {...props} className="mb-4 space-y-2 pl-4">
    {children}
  </ul>
);

export default UnorderedList;
