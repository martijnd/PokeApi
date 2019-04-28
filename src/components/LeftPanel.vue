<template>
    <div class="left-panel">
        <div class="picture-screen">
            <img :src="pokemonPicture" alt="picture">
        </div>
        <div class="controls">

        </div>
    </div>
</template>

<script lang="ts">
 
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../models/Pokemon';

@Component
export default class LeftPanel extends Vue {
    @Prop() pokemon!: Pokemon;

    get pokemonPicture(): string {
        return this.pokemon.sprites.front_default;
    }

    mounted() {
        console.log(this.pokemon);
    }
}

</script>


<style lang="scss" scoped>
.left-panel {
    display: block;
    width: 300px;
}
</style>
