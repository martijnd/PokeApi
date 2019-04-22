import State from "./state";
import { MutationTree } from "vuex";
import axios, { AxiosResponse } from "axios";
import { Pokemon, PokemonState } from "@/models/Pokemon";

const mutations: MutationTree<PokemonState> = {
  pokemonLoaded(state, payload: Pokemon) {
    state.pokemon = payload;
  }
};

export default mutations;
