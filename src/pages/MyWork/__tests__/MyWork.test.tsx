import React from 'react';
import renderer from 'react-test-renderer';

import MyWork from '..';

describe('<MyWork />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<MyWork />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
