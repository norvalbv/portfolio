import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '..';

describe('<Footer />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
