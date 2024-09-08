import renderer from 'react-test-renderer';

import Backdrop from '..';

describe('<Backdrop />', () => {
  test('should render correctly with all props', () => {
    const tree = renderer
      .create(
        <Backdrop close={jest.fn()} isOpened>
          Test
        </Backdrop>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
