<template>
    <div class="left-panel">
        <div class="picture-screen">
            <img :src="this.pokemon.picture" alt="picture">
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
}

</script>


<style lang="scss" scoped>
.left-panel {
    position: relative;
    display: block;
    width: 300px;

    .picture-screen {
        position: absolute;
        top: 150px;
        left: 10px;
        width: 250px;
        height: 200px;
        background-color: #e7e7e7;
        padding: 10px;
        img {
            width: 150px;
            margin: 20px;
        }
    }
}
</style>
