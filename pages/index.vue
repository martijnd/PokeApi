<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <input type="number" @input="fetchPokemon($event.target.value)" />
      <div class="text-xs-center">
        {{ pokemon ? pokemon.name : 'Loading...' }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      pokemon: null
    };
  },
  methods: {
    async fetchPokemon(id) {
      this.pokemon = await this.$api.get(`${id}`);
    }
  }
};
</script>
