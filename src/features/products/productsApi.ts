import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../data/types';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tvk13qhroe.execute-api.eu-central-1.amazonaws.com/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`
    })
  })
});

export const { useGetProductsQuery } = productsApi;
