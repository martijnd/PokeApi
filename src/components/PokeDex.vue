<template>
    <div class="container">
        <h1 v-if="pokemon">{{ pokemon.name }}</h1>
        <div v-if="pokemon" class="pokedex-wrapper">
            <div class="left-panel">
                <div class="picture-screen"></div>
                <div class="controls">
 
                </div>
            </div>
            <div class="right-panel">
                <div class="info-screen"></div>
                <div class="number-pad">

                </div>
            </div>
        </div>  
    </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from "../models/Pokemon";
import { AxiosResponse } from 'axios';

@Component({
   
})
export default class PokeDex extends Vue {
    pokemon: Pokemon | {} = {};

    async fetchPokemon(pokemonId: number): Promise<void> {
        this.$http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then((response: AxiosResponse<Pokemon>) => this.pokemon = response.data);
    }

    mounted(){
        this.fetchPokemon(1);
    }
}
</script>

<style lang="scss" scoped>

</style>
