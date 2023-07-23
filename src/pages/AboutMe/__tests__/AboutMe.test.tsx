import React from 'react';
import renderer from 'react-test-renderer';

import AboutMe from '..';

describe('<AboutMe />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<AboutMe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
