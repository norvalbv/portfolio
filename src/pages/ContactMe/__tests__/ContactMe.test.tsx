import React from 'react';
import renderer from 'react-test-renderer';

import ContactMe from '..';

describe('<ContactMe />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<ContactMe />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
