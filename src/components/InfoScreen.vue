<template>
<div class="info-screen">
    <span class="name">{{ pokemon.name }}</span>
    <div class="wrapper">
        <span class="height">Height: {{ computedHeight }} cm</span>
        <span class="weight">Weight: {{ computedWeight }} kg</span>
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
        console.log(this.pokemon.name);
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
    background-color: $background;
    width: 250px;
    height: 100px;
    position: absolute;
    top: 200px;
    border-radius: 10px;
    padding: 10px;
    .name {
        font-size: 20px;
        font-weight: 700;
    }
    .wrapper {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>

