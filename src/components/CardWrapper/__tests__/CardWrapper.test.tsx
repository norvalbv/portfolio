import React from 'react';
import renderer from 'react-test-renderer';

import CardWrapper from '..';

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
});
