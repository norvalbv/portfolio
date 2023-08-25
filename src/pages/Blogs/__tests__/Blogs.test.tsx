import React from 'react';
import renderer from 'react-test-renderer';

import Blogs from '..';

describe('<Blogs />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Blogs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
