import React, { ReactElement } from 'react';

type BadgeProps = {
  tag: string;
};

const Badge = ({ tag }: BadgeProps): ReactElement => {
  return (
    <div className="text-x m-2 w-max rounded-lg bg-accent-secondary px-4 py-0.5 text-dark-text">
      {tag}
    </div>
  );
};

export default Badge;
