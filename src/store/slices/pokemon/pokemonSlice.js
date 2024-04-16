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
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemon = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
