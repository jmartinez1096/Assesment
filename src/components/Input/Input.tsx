import React, {useState} from 'react';
import { Text } from 'react-native';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {InputProps} from '../../types';

import {
  Container,
  IconWrapper,
  InputStyled,
  Label,
  Wrapper,
} from './Styles';

export const Input = (props: InputProps) => {
  const {
    leftIcon,
    rightIcon,
    placeholder,
    label,
    value,
    onBlur,
    onChange,
    errorMessage,
    borderColor,
  } = props;

  const [isFocused, setFocus] = useState(false);

  const labelName = !isFocused && !value && placeholder ? placeholder : label;

  const handleBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setFocus(false);
    onBlur && onBlur(e);
  };

  const handleFocus = (): void => {
    setFocus(true);
  };

  return (
    <Container>
      <Wrapper borderColor={borderColor}>
        <Label isFocused={!!value || isFocused} withIcon={!!leftIcon}>
          {labelName}
        </Label>
        <IconWrapper>{leftIcon && leftIcon}</IconWrapper>
        <InputStyled
          {...props}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChange}
          hasLeftIcon={!!leftIcon}
          placeholderTextColor={'#000'}
        />
        <IconWrapper>{rightIcon && rightIcon}</IconWrapper>
      </Wrapper>

      {errorMessage && (
        <>
          <Text style={{fontSize: 8, color: 'red'}}>
            {errorMessage}
          </Text>
        </>
      )}
    </Container>
  );
};
