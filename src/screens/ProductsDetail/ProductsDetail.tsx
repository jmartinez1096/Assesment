import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text} from 'react-native';
import {
  Button,
  Container,
  Header,
  ProductsRowLogo,
  ProductsRowText,
} from '../../components';
import {TitleWrapper, ViewProductDetail, Wrapper, ViewButtons, WrapperModal} from './Styles';

import {
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';

export const ProductsDetail = (props: {navigation: any}) => {
  const {navigation} = props;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [modalState, setModalState] = useState(-1);
  const handleSheetChanges = useCallback((index: number) => {
    setModalState(index);
  }, []);

  useEffect;
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
              }}>{`ID: 27cx32D`}</Text>
            <Text
              style={{
                fontSize: 16,
                color: '#a7a7a7',
              }}>{`Información extra`}</Text>
          </TitleWrapper>
          <ViewProductDetail>
            <ProductsRowText title={'Nombre'} text={'mundo'} />
            <ProductsRowText title={'Descripcón'} text={'mundo'} />
            <ProductsRowLogo
              title={'Logo'}
              image={
                'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg'
              }
            />

            <ProductsRowText title={'Fecha Liberacón'} text={'mundo'} />
            <ProductsRowText title={'Fecha Revisión'} text={'mundo'} />
          </ViewProductDetail>
          <ViewButtons>
            <Button
              primaryText={'Editar'}
              textColor={'#293e6d'}
              background={'#fff'}
              marginTop={24}
              onPress={() => console.log('agregar')}
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
                  }}>{`¿Estás seguro de eliminar el producto Mundo?`}</Text>
                <ViewButtons>
                  <Button
                    primaryText={'Confirmar'}
                    textColor={'#293e6d'}
                    marginTop={24}
                    onPress={() => console.log('agregar')}
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
