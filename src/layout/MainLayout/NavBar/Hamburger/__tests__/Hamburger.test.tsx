import React from 'react';
import renderer from 'react-test-renderer';

import Hamburger from '..';

describe('<Hamburger />', () => {
  test('should render correctly with mandatory props', () => {
    const tree = renderer.create(<Hamburger onclick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
