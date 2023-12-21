import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const optionApi = createApi({
  reducerPath: "optionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getGeneration: builder.query<any, void>({
      query: () => "/generation",
    }),
    getTypes: builder.query<any, void>({
      query: () => "/type",
    }),
    getRegions: builder.query<any, void>({
      query: () => "/region",
    }),
  }),
});

export const { useGetGenerationQuery, useGetRegionsQuery, useGetTypesQuery } =
  optionApi;
