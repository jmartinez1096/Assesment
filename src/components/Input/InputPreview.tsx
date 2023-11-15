import React, {FC} from 'react';
import {Text} from 'react-native';
import {Field, Label, PreviewContainer} from './Styles';

type Props = {
  label: string;
  value: string;
  disabled?: boolean;
};

export const InputPreview: FC<Props> = props => {
  const {label, value, disabled} = props;

  return (
    <PreviewContainer disabled={disabled}>
      <Label isFocused disabled={disabled}>
        {label}
      </Label>
      <Field>
        <Text style={{lineHeight: 19}}>{value}</Text>
      </Field>
    </PreviewContainer>
  );
};
