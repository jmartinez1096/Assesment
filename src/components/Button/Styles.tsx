import styled from 'styled-components/native';

type BtnProps = {
  background?: string;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  disabled?: boolean;
  paddingHorizontal?: number;
  height?: number;
  outlined?: boolean;
  borderColor?: string;
};

export const ButtonContainer = styled.TouchableOpacity<BtnProps>`
  background: ${({background, disabled}) =>
    disabled ? 'grey' : background || '#fddd01'};
  height: ${({height = 45}) => `${height}px`};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? `${marginBottom}px` : '0'};
  margin-top: ${({marginTop}) => (marginTop ? `${marginTop}px` : '0px')};
  margin-left: ${({marginLeft}) => (marginLeft ? `${marginLeft}px` : '0px')};
  margin-right: ${({marginRight}) =>
    marginRight ? `${marginRight}px` : '0px'};
  padding-left: ${({paddingHorizontal = 0}) => `${paddingHorizontal}px`};
  padding-right: ${({paddingHorizontal = 0}) => `${paddingHorizontal}px`};
  border-color: ${({outlined, borderColor}) =>
    `${outlined ? borderColor : ''}`};
  border-width: ${({outlined}) => `${outlined ? 1 : 0}px`};
`;
