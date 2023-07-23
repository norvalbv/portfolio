import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import CardWrapper, { CardWrapperProps } from '..';

const CardWrapperWithAllProps: FC<Required<CardWrapperProps>> = CardWrapper;

describe('<CardWrapper />', () => {
  test('should render correctly with mandatory props', () => {
    const tree = renderer
      .create(
        <CardWrapper title="Test Title">
          <div>Child</div>
        </CardWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with all props', () => {
    const tree = renderer
      .create(
        <CardWrapperWithAllProps
          title="Test Title"
          className="bg-red-500"
          titleClassName="text-blue-500"
          subTitle="Test subtitle"
          description="Test description"
          id="testId"
        >
          <div>Child</div>
        </CardWrapperWithAllProps>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
