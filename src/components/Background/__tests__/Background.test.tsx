import React from 'react';
import renderer from 'react-test-renderer';

import Background from '..';

describe('<Background />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Background />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
