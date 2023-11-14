import React, {FC} from 'react';
import {Text} from 'react-native';
import {
  Container,
  ContainerColumn,
  ContainerRow,
  ImageView,
  TextContainer,
  ViewSeparator,
} from './Styles';
type Props = {
  image: string;
  title: string;
};

export const ProductsRowLogo: FC<Props> = props => {
  const {title, image} = props;

  return (
    <Container>
      <ContainerRow>
        <ViewSeparator style={{width: '50%'}}>
          <ContainerColumn>
            <TextContainer>
              <Text style={{color: '#a7a7a7', fontSize: 16}}>{`${title}`}</Text>
            </TextContainer>
          </ContainerColumn>
        </ViewSeparator>
      </ContainerRow>
      <ViewSeparator style={{width: '50%', justifyContent: 'center'}}>
        <ImageView source={{uri: image}}/>
      </ViewSeparator>
    </Container>
  );
};
