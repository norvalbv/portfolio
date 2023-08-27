import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '..';

describe('<Loader />', () => {
  it('Must render correctly', () => {
    const tree = renderer.create(<Loader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
