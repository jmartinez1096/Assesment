import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingBottom?: number;
  children?: ReactNode;
  marginBottom?: number;
  backgroundColor?: string;
};

export const Content: FC<Props> = ({children, backgroundColor, ...rest}) => {
  return (
    <StyledScrollView backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledScrollView>
  );
};

Content.defaultProps = {backgroundColor: '#fff'};

export const StyledScrollView = styled(KeyboardAwareScrollView)<Props>`
  background: ${({backgroundColor = 'transparent'}) => backgroundColor};
  padding-left: ${({paddingHorizontal = 0}) => `${paddingHorizontal}px`};
  padding-right: ${({paddingHorizontal = 0}) => `${paddingHorizontal}px`};
  padding-top: ${({paddingVertical = 0}) => `${paddingVertical}px`};
  padding-bottom: ${({paddingBottom = 0}) => `${paddingBottom}px`};
  margin-bottom: ${({marginBottom = 0}) => `${marginBottom}px`};
`;
