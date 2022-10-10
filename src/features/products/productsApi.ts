import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../data/types';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://5dxw106upf.execute-api.eu-central-1.amazonaws.com/dev/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`
    })
  })
});

export const { useGetProductsQuery } = productsApi;
