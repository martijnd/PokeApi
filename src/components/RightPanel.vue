<template>
    <div class="right-panel">
        <InfoScreen :pokemon="pokemon" />
        <div class="number-pad">
            <button @click="increment" :disabled="loading"> + 1</button>
            <button @click="decrement" :disabled="loading"> - 1</button>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../models/Pokemon';
import InfoScreen from './InfoScreen.vue';

@Component({
    components: {
        InfoScreen
    }
})
export default class LeftPanel extends Vue {
    @Prop() pokemon!: Pokemon;
    @Prop() loading!: boolean;

    increment(): void {
        this.$emit('increment');
    }
    decrement(): void {
        this.$emit('decrement');
    }
}

</script>

<style lang="scss" scoped>
.right-panel {
    width: 300px;
}
</style>
