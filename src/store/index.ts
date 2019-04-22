import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";

import State from "./state";

import actions from "./actions";
import mutations from "./mutations";
import { PokemonState } from "@/models/Pokemon";
import { RootState } from "./types";

export const state: PokemonState = {
  pokemon: {}
};

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    pokemon: null
  }
};

export default new Store<RootState>(store);
