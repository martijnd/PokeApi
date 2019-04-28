<template>
<div class="info-screen">
    <div class="name">{{ pokemon.name }}</div>
    <div class="wrapper">
        <div class="row">
            <span class="height">Height: {{ computedHeight }} cm</span>
            <span class="weight">Weight: {{ computedWeight }} kg</span>
        </div>
        <h3>Moves</h3>
        <div class="move-container" v-for="move in pokemon.moves" :key="move.title">
            <div class="title">{{ move.move.name }}</div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../models/Pokemon';

@Component
export default class LeftPanel extends Vue {
    @Prop() pokemon!: Pokemon;

    get computedHeight(): number {
        return this.pokemon.height * 10;
    }

    get computedWeight(): number {
        return this.pokemon.weight / 10;
    }
}

</script>

<style lang="scss" scoped>
$background: #15FD00;

.info-screen {
    margin-top: 30px;
    background-color: $background;
    width: 250px;
    height: 270px;
    overflow-y: scroll;
    border-radius: 10px;
    padding: 10px;
    .name {
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 700;
        text-transform: capitalize;
    }
    .wrapper .row {
        display: flex;
        justify-content: space-evenly;
    }
    h3 {
        display: block;
    }
    .move-container {
        display: block;
        margin-bottom: 10px;
        .title {
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 5px;
        }
    }
}
</style>

