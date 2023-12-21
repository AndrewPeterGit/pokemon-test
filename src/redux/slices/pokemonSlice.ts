import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../types";

interface PokemonState {
  offset: number;
  limit: number;
  items: Pokemon[];
}

const initialState: PokemonState = {
  offset: 0,
  limit: 12,
  items: [],
};

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Pokemon[]>) => {
      state.items = state.items.concat(action.payload);
      state.offset = state.offset + state.limit;
    },
  },
});

export const { addData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
