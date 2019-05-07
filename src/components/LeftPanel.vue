<template>
  <g id="Left-panel" transform="translate(248.000000, 119.000000)">
    <path
      d="M5.5,5.5 L5.5,572.5 L443.5,572.5 L443.5,120.5 L492.5,120.5 L492.5,5.5 L5.5,5.5 Z"
      id="Left-panel-background"
      stroke="#BD3225"
      stroke-width="11"
      fill="#F54D3D"
    ></path>
    <g id="screen-container">
      <rect
        id="Screen"
        fill="#C5CAE9"
        x="46"
        y="135"
        width="360"
        height="326"
      ></rect>
      <text
        id="name"
        font-family="AvenirNext-Heavy, Avenir Next"
        font-size="24"
        x="215"
        y="170"
        font-weight="600"
        fill="#5C6BC0"
        >{{ pokemon.name }}</text
      >
      <image
        :xlink:href="pokemon.picture"
        width="150"
        height="150"
        x="50"
        y="150"
      />
    </g>
    <g id="Top">
      <g id="Prev-button" transform="translate(48.000000, 484.000000)">
        <path
          d="M8.9735982,-3.62544108e-16 L181,0 L181,52 L8.9735982,52 C5.85328261,52 4.72178078,51.6751104 3.58104004,51.0650355 C2.4402993,50.4549607 1.54503929,49.5597007 0.934964463,48.41896 C0.324889639,47.2782192 1.40432378e-16,46.1467174 -2.41696072e-16,43.0264018 L2.41696072e-16,8.9735982 C-1.40432378e-16,5.85328261 0.324889639,4.72178078 0.934964463,3.58104004 C1.54503929,2.4402993 2.4402993,1.54503929 3.58104004,0.934964463 C4.72178078,0.324889639 5.85328261,2.10648567e-16 8.9735982,-3.62544108e-16 Z"
          id="Rectangle"
          stroke="#BD3225"
          stroke-width="4"
          fill="#FFAA00"
        ></path>
        <polygon
          id="arrow"
          fill="#BD3225"
          points="67 21.40625 67 31.5 38.4927536 31.546875 38.4927536 36 20 26.5 38.4927536 17 38.4927536 21.453125"
        ></polygon>
        <text
          id="PREV"
          font-family="AvenirNext-Heavy, Avenir Next"
          font-size="20"
          font-weight="600"
          fill="#BD3225"
        >
          <tspan x="78.2" y="33">PREV</tspan>
        </text>
      </g>
      <g id="Next-button" transform="translate(230.000000, 484.000000)">
        <path
          d="M8.9735982,-3.62544108e-16 L177,0 L177,52 L8.9735982,52 C5.85328261,52 4.72178078,51.6751104 3.58104004,51.0650355 C2.4402993,50.4549607 1.54503929,49.5597007 0.934964463,48.41896 C0.324889639,47.2782192 1.40432378e-16,46.1467174 -2.41696072e-16,43.0264018 L2.01805291e-15,8.9735982 C1.63592446e-15,5.85328261 0.324889639,4.72178078 0.934964463,3.58104004 C1.54503929,2.4402993 2.4402993,1.54503929 3.58104004,0.934964463 C4.72178078,0.324889639 5.85328261,2.10648567e-16 8.9735982,-3.62544108e-16 Z"
          id="Rectangle"
          stroke="#BD3225"
          stroke-width="4"
          fill="#FFAA00"
          transform="translate(88.500000, 26.000000) scale(-1, 1) translate(-88.500000, -26.000000) "
        ></path>
        <polygon
          id="arrow"
          fill="#BD3225"
          transform="translate(134.500000, 26.500000) scale(-1, 1) translate(-134.500000, -26.500000) "
          points="158 21.40625 158 31.5 129.492754 31.546875 129.492754 36 111 26.5 129.492754 17 129.492754 21.453125"
        ></polygon>
        <text
          id="NEXT"
          font-family="AvenirNext-Heavy, Avenir Next"
          font-size="20"
          font-weight="600"
          fill="#BD3225"
        >
          <tspan x="33.12" y="33">NEXT</tspan>
        </text>
      </g>
      <polygon
        id="Top-bg"
        fill="#BD3225"
        points="0 103.5 231 103.5 331 46 498 46 498 0 0 0"
      ></polygon>
      <g id="Bulb" transform="translate(44.000000, 19.000000)">
        <circle id="Oval" fill="#D3D3D3" cx="33" cy="33" r="33"></circle>
        <circle id="Oval" fill="#13679F" cx="33" cy="33" r="29"></circle>
        <circle id="Oval" fill="#25A9F8" cx="30" cy="30" r="18"></circle>
        <circle id="Oval" fill="#9DD7F8" cx="26" cy="27" r="6"></circle>
      </g>
    </g>
  </g>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "../models/Pokemon";

@Component
export default class LeftPanel extends Vue {
  @Prop() pokemon!: Pokemon;
}
</script>

<style lang="scss" scoped>
#name {
  text-transform: capitalize;
}
</style>
