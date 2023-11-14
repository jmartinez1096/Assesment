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
  text: string;
  title: string;
};

export const ProductsRowText: FC<Props> = props => {
  const {title, text} = props;

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

        <ViewSeparator style={{width: '50%', justifyContent: 'flex-end'}}>
            <Text style={{color: '#000', fontSize: 16, fontFamily: 'bold'}}>
              {`${text}`}
            </Text>
        </ViewSeparator>
      </ContainerRow>
    </Container>
  );
};
