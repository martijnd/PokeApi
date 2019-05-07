<template>
  <div class="container">
    <svg
      viewBox="0 0 1440 720"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      v-if="pokemon"
    >
      <g
        id="Pokedex"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <LeftPanel
          :pokemon="pokemon"
          @increment="increment"
          @decrement="decrement"
        />
        <Spine />
        <RightPanel
          :pokemon="pokemon"
          @changePokemon="changePokemon"
          :loading="loading"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "../models/Pokemon";
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import Spine from "./Spine.vue";
import pokeapi from "../api/pokeapi";
import { AxiosResponse } from "axios";

@Component({
  components: {
    LeftPanel,
    RightPanel,
    Spine
  }
})
export default class PokeDex extends Vue {
  pokemon: Pokemon | null = null;
  currentId: number = 4;
  loading: boolean = false;

  async fetchPokemon(id: number): Promise<void> {
    this.loading = true;
    this.currentId = id;
    pokeapi.get(`${id}`).then((response: AxiosResponse<Pokemon>) => {
      this.pokemon = response.data;
      this.pokemon.picture = `https://pokeres.bastionbot.org/images/pokemon/${
        this.pokemon.id
      }.png`;
      this.loading = false;
    });
  }

  increment(): void {
    this.fetchPokemon(this.currentId + 1);
  }

  decrement(): void {
    this.fetchPokemon(this.currentId - 1);
  }

  changePokemon(value: number) {
    this.fetchPokemon(value);
  }

  mounted(): void {
    this.fetchPokemon(this.currentId);
  }
}
</script>

<style lang="scss">
body {
  background-color: #3b3333;
}
</style>
