import styled from 'styled-components/native';

export const DateContainer = styled.TouchableOpacity`
  height: 65px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
  padding: 35px 0 0 6px;
  width: 100%;
`;

type TLabel = {
  isFocused: boolean;
  withIcon?: boolean;
  isWhite?: boolean;
};

export const Label = styled.Text<TLabel>`
  position: absolute;
  font-family: ${({isFocused}): string => (isFocused ? 'bold' : 'regular')};
  font-size: ${({isFocused}): string => (isFocused ? '12px' : '14px')};
  bottom: ${({isFocused}): string => (isFocused ? '30px' : '4px')};
  color: #000;
`;
