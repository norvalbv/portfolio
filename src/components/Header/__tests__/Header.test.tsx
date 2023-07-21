import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Header, { HeaderProps } from '..';

const HeaderWithAllProps: FC<Required<HeaderProps>> = Header;

describe('<Header />', () => {
  test('should render nothing if title and subtitle are not provided', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with title provided', () => {
    const tree = renderer.create(<Header title="Test title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with subtitle provided', () => {
    const tree = renderer.create(<Header subtitle="Test subtitle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with all props', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <HeaderWithAllProps
            link={{ to: '/', title: 'Test Title' }}
            className="grid grid-cols-1 gap-1"
            title="Test title"
            titleTestId="Custom title test id"
            titleClassName="text-h2"
            subtitle="Test subtitle"
            subtitleTestId="Custom subtitle test id"
            subtitleClassName="text-sm"
            description="Test Description"
            descriptionTestId="Test Description Id"
            descriptionClassName="text-neutral-N00"
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
