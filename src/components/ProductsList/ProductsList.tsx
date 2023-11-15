import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';
import {ProductsItem} from './ProductsItem';
import {useIsFocused} from '@react-navigation/native';
import {InputForm} from '../Input';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TProducts} from '../../types';
import {RefreshControl} from 'react-native';

type Props = {
  productsData?: Array<TProducts>;
  navigation?: unknown;
  isLoading?: boolean;
  getProductList?: () => void;
};

type FormValues = {
  search: string;
};

export const ProductsList: FC<Props> = props => {
  const {productsData, navigation, isLoading, getProductList} = props;

  const [products, setDataProducts] = useState<Array<TProducts>>([]);
  const [productsCopy, setDataProductsCopy] = useState<Array<TProducts>>(
    [],
  );

  const {control, setValue} = useForm<FormValues>({
    mode: 'onTouched',
  });

  useEffect(() => {
    if (productsData.length > 0) {
      setDataProductsCopy(productsData);
      setDataProducts(productsData);
    }
  }, [productsData]);

  // useEffect(() => {
  //   getProductList();
  // }, [isFocused]);

  const onChangue = async (text: string) => {
    const textWithoutSensitive = text
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

    const filteredArray = products.filter(
      item =>
        item.name
          .normalize('NFD')
          .replace(/\p{Diacritic}/gu, '')
          .toLowerCase()
          .indexOf(textWithoutSensitive.toLowerCase()) > -1,
    );
    setDataProductsCopy(filteredArray);
    setValue('search', text);
  };

  return (
    <ProductsContainer>
      <InputForm
        name="search"
        control={control}
        label={'Buscar...'}
        leftIcon={<Icon name="search" size={17} color={'#120D26'} />}
        onChange={e => onChangue(e.toString())}
      />

      <FlatList
        data={productsCopy}
        style={{margin: 10}}
        renderItem={({item}) => (
          <ProductsItem
            key={item.id}
            name={item.name}
            id={item.id}
            productObject={item}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => getProductList()}
            title={'Cargando...'}
            enabled={true}
          />
        }
      />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.View`
  margin-top: 30px;
  width: 100%;
`;
