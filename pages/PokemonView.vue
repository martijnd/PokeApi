<template>
  <div>
    <h2>{{ pokemon.name }}</h2>
    <p>{{ pokemon.weight }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Pokemon } from '~/models/Pokemon';

@Component
export default class PokemonView extends Vue {
  @Prop({ type: Object, required: true }) pokemon!: Pokemon
}
</script>
