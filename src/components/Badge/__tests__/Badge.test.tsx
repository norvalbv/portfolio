import React from 'react';
import renderer from 'react-test-renderer';

import Badge from '..';

describe('<Badge />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Badge tag="Test Tag" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
