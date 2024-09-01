import React from 'react';
import renderer from 'react-test-renderer';

import AboutMe from '../page';

describe('<AboutMe />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<AboutMe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
