import React from 'react';
import renderer from 'react-test-renderer';

import StyledLink from '..';

describe('<StyledLink />', () => {
  test('should render correctly with mandatory props', () => {
    const tree = renderer.create(<StyledLink link="/" label="Test Label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
