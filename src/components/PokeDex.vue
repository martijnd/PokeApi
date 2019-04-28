<template>
    <div class="container">
        <div v-if="pokemon" class="pokedex-wrapper">
            <LeftPanel :pokemon="pokemon" />
            <RightPanel 
                :pokemon="pokemon"
                @increment="increment" 
                @decrement="decrement" 
                @changePokemon="changePokemon"
                :loading="loading" />
        </div>  
    </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../models/Pokemon';
import LeftPanel from './LeftPanel.vue';
import RightPanel from './RightPanel.vue';
import pokeapi from '../api/pokeapi';
import { AxiosResponse } from 'axios';
 
@Component({
   components: {
       LeftPanel, RightPanel
   }
})
export default class PokeDex extends Vue {
    pokemon: Pokemon | null = null;
    currentId: number = 1;
    loading: boolean = false;

    async fetchPokemon(id: number): Promise<void> {
        this.loading = true;
        this.currentId = id;
        pokeapi.get(`${id}`).then((response: AxiosResponse<Pokemon>) => { 
            this.pokemon = response.data; 
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
        this.fetchPokemon(1);
    }
}
</script>

<style lang="scss">
$red: #be0a0a;

body {
    background-color: #000000;
}

.container {
    display: flex;
    justify-content: center;
    .pokedex-wrapper {
        display: flex;
        background-color: $red;
        width: 600px;
        height: 600px;
        flex-direction: row;
        align-items: stretch;
    }
}
</style>
