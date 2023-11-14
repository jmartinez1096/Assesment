import React, {FC} from 'react';
import {BackButton, HeaderContainer, TitleContainer} from './Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, Text} from 'react-native';
import {Images} from '../../assets';

type Props = {
  title?: string | null;
  renderBack?: boolean;
};

const screenHeight = Dimensions.get('screen').height;
export const Header: FC<Props> = props => {
  const {title, renderBack} = props;
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {renderBack && (
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="left" size={24} color={'#000'} />
        </BackButton>
      )}

      <TitleContainer>
        <Image
          source={Images.logo}
          style={{
            width: screenHeight * 0.1,
            height: screenHeight * 0.1,
            marginLeft: renderBack ? -80 : 0,
          }}
          resizeMode={'contain'}
        />
      </TitleContainer>
    </HeaderContainer>
  );
};
