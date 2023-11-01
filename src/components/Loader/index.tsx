import { ReactElement } from 'react';
import { LoaderIcon } from 'components/SVG';
import CardWrapper from 'components/CardWrapper';

const Loader = (): ReactElement => {
  return (
    <CardWrapper centered>
      <LoaderIcon />
    </CardWrapper>
  );
};

export default Loader;
