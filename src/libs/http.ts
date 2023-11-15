import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

export class Http {
  readonly instance;

  constructor(
    url: string = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
  ) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 40000,
      headers: {
        Accept: 'application/json',
      },
    });

    this.adduserToken();
    this.handleResponse();
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }

  private adduserToken(): void {
    this.instance.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        config.headers = {
          ...config.headers,
          authorId: `02`,
        };
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
  }

  private handleResponse(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return Promise.resolve(response.data);
      },
      function (error) {
        return Promise.reject(error.response);
      },
    );
  }
}
