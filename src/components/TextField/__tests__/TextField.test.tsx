import React, { FC } from 'react';
import renderer from 'react-test-renderer';

import TextField, { TextFieldProps } from '..';

const TextFieldWithAllProps: FC<Required<TextFieldProps>> = TextField;

describe('<TextField />', () => {
  test('should render correctly with mandatory props', () => {
    const tree = renderer.create(<TextField />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('should render correctly with all props', () => {
    const tree = renderer.create(
      <TextFieldWithAllProps
        autoComplete="on"
        autoFocus={false}
        autoValidate
        border
        className="underline"
        dataAtt="Test DataAtt"
        disabled
        error="ERROR!!"
        errorMessagePosition="bottom"
        icon={<div>Icon</div>}
        iconPosition="right"
        id="Test Id"
        inputType="textarea"
        label="Test Label"
        labelAppend={<div>Label</div>}
        name="Test name"
        onChange={jest.fn()}
        onClick={jest.fn()}
        placeholder="placeholder"
        required
        rounded="sm"
        size="base"
        type="text"
        value={30}
        labelColour="text-neutral-N400"
        textColour="text-neutral-N400"
      >
        <div>Child</div>
      </TextFieldWithAllProps>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
