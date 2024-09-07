import { ReactElement } from 'react';

const UnorderedList = ({ children, ...props }: { children: ReactElement }): ReactElement => (
  <ul {...props}>{children}</ul>
);

export default UnorderedList;
