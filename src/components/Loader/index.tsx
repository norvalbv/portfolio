import { ReactElement } from 'react';
import { LoaderIcon } from '@/src/components/SVG';
import CardWrapper from '@/src/components/CardWrapper';

const Loader = (): ReactElement => {
  return (
    <CardWrapper centered>
      <LoaderIcon />
    </CardWrapper>
  );
};

export default Loader;
