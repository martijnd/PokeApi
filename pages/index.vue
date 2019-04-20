<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <PokemonView v-if="pokemon" :pokemon="pokemon" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Pokemon } from '../models/Pokemon';
import pokemon from '../api/pokemon';

@Component({
  components: {
    PokemonView: () => import('./PokemonView.vue')
  },
  async asyncData(): Promise<Pokemon> {
    const { data } = await pokemon.get('https://pokeapi.co/api/v2/pokemon/1/');

    return data;
  }
})
export default class Index extends Vue {
  pokemon: Pokemon | null = null;
}
</script>
