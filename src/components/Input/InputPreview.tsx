import React, {FC} from 'react';
import {Text} from 'react-native';
import {useTheme} from 'styled-components';
import {Field, Label, PreviewContainer} from './Styles';

type Props = {
  label: string;
  value: string;
  select?: boolean;
  disabled?: boolean;
};

export const InputPreview: FC<Props> = props => {
  const {label, value, select, disabled} = props;
  const theme = useTheme();

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
