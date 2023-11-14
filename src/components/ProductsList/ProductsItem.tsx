import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native';
import {
  Container,
  ContainerColumn,
  ContainerRow,
  TextContainer,
  ViewSeparator,
} from './Styles';
type Props = {
  name: string;
  id: string;
  navigation: unknown;
};

export const ProductsItem: FC<Props> = props => {
  const {name, id, navigation} = props;

  const navigateToDetail = (id: string) => {
    navigation.navigate('ProductsDetail', {
      id: id,
    });
  };
  return (
    <Container onPress={() => navigateToDetail(id)}>
      <ContainerRow>
        <ViewSeparator style={{width: '50%'}}>
          <ContainerColumn>
            <TextContainer>
              <Text style={{color: '#000', fontSize: 16, fontFamily: 'bold'}}>
                {`${name}`}
              </Text>
              <Text
                style={{color: '#A7A7A7', fontSize: 12, fontFamily: 'light'}}>
                {`ID: ${id}`}
              </Text>
            </TextContainer>
          </ContainerColumn>
        </ViewSeparator>

        <ViewSeparator style={{width: '50%', justifyContent: 'flex-end'}}>
          <Icon name="right" size={24} color={'#000'} />
        </ViewSeparator>
      </ContainerRow>
    </Container>
  );
};
