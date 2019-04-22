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
import { State, Action, Getter } from 'vuex-class';
import { Pokemon, PokemonState } from "../models/Pokemon";
import { AxiosResponse } from 'axios';
const namespace: string = 'pokemon';

@Component({
   
})
export default class PokeDex extends Vue {
    @State('pokemon') pokemon!: PokemonState;
    @Action('fetchPokemon', { namespace }) fetchPokemon: any;

    mounted() {
        this.fetchPokemon(1);
    }
}
</script>

<style lang="scss" scoped>

</style>
