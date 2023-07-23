import React from 'react';
import renderer from 'react-test-renderer';

import NavBar from '..';

describe('<NavBar />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
