<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
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
      ip: null,
      pokemon: null
    };
  },
  async mounted() {
    this.pokemon = await this.$axios.$get(
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
  }
};
</script>
