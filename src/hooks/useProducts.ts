import {ErrorMessage, TProducts} from './../types';
import {useState} from 'react';
import {UserProductsService} from '../services';

export const useProducts = () => {
  const [products, setProducts] = useState<Array<TProducts>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>();

  const getProducts = async () => {
    console.log('llamando productos')
    try {
      setLoading(true);
      const response = await UserProductsService.getProducts();
      setProducts(response);
      console.log('response', response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // const getProductsDetail = async (id: string) => {
  //   try {
  //     setLoading(true);
  //     const response = await UserProductsService.getProductsDetail(id);
  //     setProductsDetail(response);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };

  return {
    isLoading,
    products,
    getProducts,
    error,
  };
};
