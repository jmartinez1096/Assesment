import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text} from 'react-native';
import {
  Button,
  Container,
  Header,
  ProductsRowLogo,
  ProductsRowText,
} from '../../components';
import {
  TitleWrapper,
  ViewProductDetail,
  Wrapper,
  ViewButtons,
  WrapperModal,
} from './Styles';

import {
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import {useProducts} from '../../hooks';

export const ProductsDetail = ({route, navigation}) => {
  const {productObject} = route.params;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const {succesDelete, isLoading, deleteProduct} = useProducts();

  const [modalState, setModalState] = useState(-1);
  const handleSheetChanges = useCallback((index: number) => {
    setModalState(index);
  }, []);

  const navigateToEdit = () => {
    navigation.navigate('AddProduct', {
      edit: true,
      productObject: productObject,
    });
  };

  useEffect(() => {
    if (succesDelete) {
      navigation.goBack();
    }
  }, [succesDelete, isLoading]);
  return (
    <Container>
      <BottomSheetModalProvider>
        <Header renderBack={true} />
        <Wrapper>
          <TitleWrapper>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#000',
              }}>{`ID: ${productObject?.id}`}</Text>
            <Text
              style={{
                fontSize: 16,
                color: '#a7a7a7',
              }}>{`Información extra`}</Text>
          </TitleWrapper>
          <ViewProductDetail>
            <ProductsRowText title={'Nombre'} text={productObject?.name} />
            <ProductsRowText
              title={'Descripcón'}
              text={productObject?.description}
            />
            <ProductsRowLogo title={'Logo'} image={productObject?.logo} />

            <ProductsRowText
              title={'Fecha Liberacón'}
              text={dayjs(productObject?.date_release).format('DD/MM/YYYY')}
            />
            <ProductsRowText
              title={'Fecha Revisión'}
              text={dayjs(productObject?.date_revision).format('DD/MM/YYYY')}
            />
          </ViewProductDetail>
          <ViewButtons>
            <Button
              primaryText={'Editar'}
              textColor={'#293e6d'}
              background={'#fff'}
              marginTop={24}
              onPress={() => navigateToEdit()}
            />

            <Button
              primaryText={'Eliminar'}
              textColor={'#fff'}
              background={'#E61d1d'}
              marginTop={24}
              onPress={() => setModalState(0)}
            />
          </ViewButtons>
        </Wrapper>

        <BottomSheet
          ref={bottomSheetRef}
          index={modalState}
          snapPoints={['40%']}
          children={
            <BottomSheetScrollView scrollEnabled={true}>
              <WrapperModal>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#000',
                    fontSize: 16,
                    marginTop: 20,
                  }}>{`¿Estás seguro de eliminar el producto ${productObject?.name}?`}</Text>
                <ViewButtons>
                  <Button
                    primaryText={'Confirmar'}
                    textColor={'#293e6d'}
                    marginTop={24}
                    onPress={() => deleteProduct(productObject?.id)}
                  />

                  <Button
                    primaryText={'Cancelar'}
                    textColor={'#293e6d'}
                    background={'#fff'}
                    marginTop={24}
                    onPress={() => bottomSheetRef.current?.close()}
                  />
                </ViewButtons>
              </WrapperModal>
            </BottomSheetScrollView>
          }
          onChange={handleSheetChanges}
        />
      </BottomSheetModalProvider>
    </Container>
  );
};
