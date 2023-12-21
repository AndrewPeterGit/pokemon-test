import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addData } from "../slices/pokemonSlice";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<any, { offset: number; limit: number }>({
      query: ({ offset, limit }) => `pokemon?offset=${offset}&limit=${limit}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addData(data.results));
        } catch (error: any) {
          localStorage.clear();
        }
      },
    }),
    getPokemonByName: builder.query<any, { name: string }>({
      query: ({ name }) => `pokemon/${name}`,
    }),
    getPokemonByGeneration: builder.query<any, { url: string }>({
      query: ({ url }) => `${url}`,
    }),
    getPokemonsByFilter: builder.query<any, { url: string }>({
      query: ({ url }) => `${url}`,
    }),
  }),
});

export const {
  useLazyGetPokemonsQuery,
  useGetPokemonByNameQuery,
  useGetPokemonsByFilterQuery,
  useLazyGetPokemonByGenerationQuery,
} = pokemonApi;
