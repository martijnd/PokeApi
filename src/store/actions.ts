import { ActionTree } from "vuex";
import axios from "axios";
import { PokemonState, Pokemon } from "@/models/Pokemon";
import { RootState } from "./types";

export const actions: ActionTree<PokemonState, RootState> = {
  fetchData({ commit }, pokemonId: number): any {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(
      response => {
        const payload: Pokemon = response && response.data;
        commit("pokemonLoaded", payload);
      },
      error => {
        commit("pokemonError");
      }
    );
  }
};
