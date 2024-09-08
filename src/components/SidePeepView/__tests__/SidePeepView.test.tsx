import renderer from 'react-test-renderer';

import SidePeepView from '..';

describe('<SidePeepView />', () => {
  test('should render correctly with all props', () => {
    const tree = renderer
      .create(
        <SidePeepView close={jest.fn()} isOpened>
          Test
        </SidePeepView>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
