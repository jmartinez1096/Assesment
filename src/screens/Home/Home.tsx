import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Container, Header} from '../../components';
import {ProductsList} from '../../components/ProductsList';
import {useProducts} from '../../hooks';
import {Wrapper} from './Styles';

export const Home = (props: {navigation: any}) => {
  const {navigation} = props;
  const {getProducts, isLoading, products} = useProducts();

  const isFocused = useIsFocused();

  useEffect(() => {
    getProducts();
  }, [isFocused]);

  const productData = [
    {
      name: 'tarjeta credito',
      id: '2cxs32sw',
    },
    {
      name: 'tarjeta debito',
      id: '22cxs322sw',
    },
  ];

  const navigateToAddProduct = () => {
    navigation.navigate('AddProduct', {
      edit: false,
    });
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <ProductsList
          productsData={productData}
          navigation={navigation}
          isLoading={isLoading}
          getProductList={() => getProducts()}
        />
        <Button
          primaryText={'Agregar'}
          textColor={'#293e6d'}
          marginTop={24}
          onPress={() => navigateToAddProduct()}
        />
      </Wrapper>
    </Container>
  );
};
