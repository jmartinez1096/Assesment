import dayjs from 'dayjs';
import {Http} from '../libs/http';
import {TProducts, GenericResponse} from '../types';

class UserProductsServices {
  private http;

  constructor() {
    this.http = new Http().getInstance();
  }

  getProducts(): Promise<Array<TProducts>> {
    return this.http.get(`/bp/products`);
  }

  createProduct(product: TProducts, edit: boolean): Promise<GenericResponse> {
    const newObj = {
      id: product.id,
      name: product.name,
      description: product.description,
      logo: product.logo,
      date_release: product.date_release,
      date_revision: product.date_revision,
    }
    if (edit) {
      return this.http.put(`/bp/products`, newObj);
    } else {
      return this.http.post(`/bp/products`, newObj);
    }
  }

  deleteProduct(id: string, ): Promise<GenericResponse> {
      return this.http.delete(`/bp/products?id=${id}`);
  }
}

export const UserProductsService = new UserProductsServices();
