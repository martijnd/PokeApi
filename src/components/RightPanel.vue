<template>
    <div class="right-panel">
        <InfoScreen :pokemon="pokemon" />
        <div class="number-pad">
            <button id="decrement" @click="decrement" :disabled="loading"> - 1 </button>
            <button id="increment" @click="increment" :disabled="loading"> + 1 </button>
        </div>
        <input type="number" step="1" min="1" max="807" @blur="changePokemon" :value="pokemon.id" />
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
    changePokemon(event: Event): void {
        this.$emit('changePokemon', (event.target as HTMLInputElement).value);
    }
}

</script>

<style lang="scss" scoped>
.right-panel {
    width: 300px;
    position: relative;
    .number-pad {
        position: absolute;
        top: 350px;
        left: 0;
        button {
            padding: 10px;
            background-color: #dbdbdb;
            cursor: pointer;
            border: 1px solid #a1a1a1;
            &:hover {
                background-color: #b3b3b3;
            }
            &#decrement {
                border-radius: 5px 0 0 5px;
            }
            &#increment {
                border-radius: 0 5px 5px 0;
            }
        }

    }
    input {
        position: absolute;
        top: 350px;
        left: 100px;
        width: 150px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        height: 16px;
    }
}
</style>
