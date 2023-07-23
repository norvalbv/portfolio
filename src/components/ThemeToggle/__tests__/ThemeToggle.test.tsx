import React from 'react';
import renderer from 'react-test-renderer';

import ThemeToggle from '..';

describe('<ThemeToggle />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<ThemeToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
