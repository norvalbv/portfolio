import React from 'react';
import renderer from 'react-test-renderer';

import Landing from '..';

describe('<Landing />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Landing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
