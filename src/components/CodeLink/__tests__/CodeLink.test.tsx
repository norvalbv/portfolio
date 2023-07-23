import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import CodeLink, { CodeLinkProps } from '..';

const CodeLinkWithAllProps: FC<Required<CodeLinkProps>> = CodeLink;

describe('<CodeLink />', () => {
  test('should render correctly with mandatory props', () => {
    const tree = renderer.create(<CodeLink link="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with all props', () => {
    const tree = renderer
      .create(<CodeLinkWithAllProps requireIcon={false} className="bg-red-500" link="/" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
