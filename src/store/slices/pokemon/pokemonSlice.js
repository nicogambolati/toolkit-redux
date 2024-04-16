import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemon: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      console.log(action);
    },
  },
});

export const { increment, startLoadingPokemons, setPokemons } = pokemonSlice.actions;
