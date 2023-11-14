import { Http } from '../libs/http';
import { TProducts } from '../types';

class UserProductsServices {
  private http;

  constructor() {
    this.http = new Http().getInstance();
  }

  getProducts(
  ): Promise<Array<TProducts>> {
    console.log('api productos')
    this.http.get(`/bp/products`).then((res) => {
      console.log(res)
    });
    return [];
  }

}

export const UserProductsService = new UserProductsServices();
