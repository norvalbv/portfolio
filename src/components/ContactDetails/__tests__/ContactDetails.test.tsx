import React from 'react';
import renderer from 'react-test-renderer';

import ContactDetails from '..';

describe('<ContactDetails />', () => {
  test('should render correctly ', () => {
    const tree = renderer.create(<ContactDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
