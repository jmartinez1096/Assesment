import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding-left: 17px;
  padding-right: 17px;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity<{ isWhite?: boolean }>`
  padding: 8px;
  border-radius: 12px;
  margin-right: 10px;
  margin-left: -10px;
`;

export const TitleContainer = styled.View`
  padding-top: ${() => (Platform.OS === 'ios' ? '0px' : '8px')};
  width: 100%;
  align-items: center;
`;