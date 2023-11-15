import {ErrorMessage, TProducts} from './../types';
import {useState} from 'react';
import {UserProductsService} from '../services';

export const useProducts = () => {
  const [products, setProducts] = useState<Array<TProducts>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>();

  const [succesCreate, setSuccesCreate] = useState<Record<string, string>>();

  const [succesDelete, setSuccesDelete] = useState<Record<string, string>>();
  const [errorCreate, setErrorCreate] = useState<Record<string, unknown>>();

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await UserProductsService.getProducts();
      setProducts(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const addProduct = async (data: TProducts, edit: boolean) => {
    try {
      setLoading(true);
      const response = await UserProductsService.createProduct(data, edit);
      setSuccesCreate(response);
      setLoading(false);
    } catch (error) {
      const errorMessage = error as ErrorMessage;
      setErrorCreate(errorMessage);
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      const response = await UserProductsService.deleteProduct(id);
      setSuccesDelete(response);
      setLoading(false);
    } catch (error) {
      const errorMessage = error as ErrorMessage;
      setError(errorMessage);
      setLoading(false);
    }
  };

  return {
    isLoading,
    products,
    getProducts,
    error,
    addProduct,
    succesCreate,
    succesDelete,
    deleteProduct,
  };
};
