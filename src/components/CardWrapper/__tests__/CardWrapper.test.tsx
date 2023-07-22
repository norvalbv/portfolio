import React from 'react';
import renderer from 'react-test-renderer';

import Accordion from '..';

describe('<Accordion />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Accordion title="Test Title">Test Content</Accordion>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
