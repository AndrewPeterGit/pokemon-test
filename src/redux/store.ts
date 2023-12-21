import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";
import { optionApi } from "./services/optionApi";
import { pokemonApi } from "./services/pokemonApi";

export const store = configureStore({
  reducer: {
    pokemonSlice: pokemonReducer,
    [optionApi.reducerPath]: optionApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      optionApi.middleware,
      pokemonApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
