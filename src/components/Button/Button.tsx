import React, {FC} from 'react';
import {
  ActivityIndicator,
  TouchableOpacityProps,
  View,
  Text,
} from 'react-native';
import {ButtonContainer} from './Styles';

type Props = TouchableOpacityProps & {
  primaryText: string;
  background?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  textColor?: string;
  textSize?: number;
  isLoading?: boolean;
  loadingIndicatorColor?: string;
  paddingHorizontal?: number;
  height?: number;
  iconRight?: number;
  outlined?: boolean;
  borderColor?: string;
};

export const Button: FC<Props> = props => {
  const {
    primaryText,
    textColor = '#fff',
    textSize = 18,
    isLoading,
    loadingIndicatorColor = '#fff',
    paddingHorizontal,
    height = 45,
    borderColor = '#fff',
    outlined = false,
    ...rest
  } = props;

  return (
    <ButtonContainer
      {...rest}
      outlined={outlined}
      paddingHorizontal={paddingHorizontal}
      borderColor={borderColor}
      height={height}>
      {isLoading ? (
        <ActivityIndicator color={loadingIndicatorColor} />
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{color: textColor, fontFamily: 'bold', fontSize: textSize}}>
            {primaryText}
          </Text>
        </View>
      )}
    </ButtonContainer>
  );
};
