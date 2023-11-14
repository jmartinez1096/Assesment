import {Dimensions, TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';

const screenHeight = Dimensions.get('screen').height;

type InputProps = TextInputProps & {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  padding-bottom: 2px;
`;

export const Wrapper = styled.View<{borderColor?: string}>`
  height: 39px;
  border-bottom-width: 1px;
  border-bottom-color: ${({borderColor}) => borderColor || '#000'};
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
`;

type TLabel = {
  isFocused?: boolean;
  withIcon?: boolean;
  disabled?: boolean;
};

export const Label = styled.Text<TLabel>`
  position: absolute;
  font-family: ${({isFocused}): string => (isFocused ? 'bold' : 'regular')};
  font-size: ${({isFocused}): string => (isFocused ? '12px' : '14px')};
  bottom: ${({isFocused}): string =>
    isFocused ? `${screenHeight * 0.035}px` : '4px'};
  padding-left: ${({withIcon}): string => (withIcon ? '22px' : '6px')};
  width: 100%;
  background-color: ${({disabled}): string =>
    disabled ? '#a7a7a7' : 'transparent'};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const IconWrapper = styled.View`
  margin-bottom: 9px;
`;

export const InputStyled = styled(TextInput)<InputProps>`
  flex: 1;
  height: 30px;
  padding: 0 6px;
  padding-bottom: 0px;
  font-size: 16px;
  color: #000;
  vertical-align: bottom;
`;

export const Field = styled.View`
  border-bottom-width: 1px;
  padding-left: 6px;
  padding-bottom: 0px;
  margin-top: 20px;
  border-bottom-color: #000;
`;

export const PreviewContainer = styled.View<TLabel>`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding-bottom: 6px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({disabled}): string =>
    disabled ? '#a7a7a7' : 'transparent'};
`;

export const ViewContainer = styled.View<TLabel>`
  height: ${({disabled}) => (disabled ? '65px' : '65px')};
  background-color: ${({disabled}): string =>
    disabled ? '#a7a7a7' : 'transparent'};
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 0;
`;
