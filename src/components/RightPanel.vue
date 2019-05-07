<template>
  <g id="Right-panel" transform="translate(746.000000, 165.000000)">
    <!-- Right panel background -->
    <path
      d="M6,6 L6,526 L440,526 L440,64 L271.395314,64 L198.895314,6 L6,6 Z"
      id="right-panel-background"
      stroke="#BD3225"
      stroke-width="12"
      fill="#F54D3D"
    ></path>

    <g id="Number-pad" transform="translate(147.000000, 145.000000)">
      <g
        id="Number-button-1"
        transform="translate(0.000000, 72.000000)"
        @click="addToInputId(1)"
      >
        <rect id="number-1" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-2)"
            xlink:href="#number-1"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-1"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">1</tspan>
        </text>
      </g>
      <g
        id="Number-button-2"
        transform="translate(58.000000, 72.000000)"
        @click="addToInputId(2)"
      >
        <rect id="number-2" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-8"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-8)"
            xlink:href="#number-2"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-2"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">2</tspan>
        </text>
      </g>
      <g
        id="Number-button-3"
        transform="translate(117.000000, 72.000000)"
        @click="addToInputId(3)"
      >
        <rect id="number-3" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-20"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-20)"
            xlink:href="#number-3"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-3"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">3</tspan>
        </text>
      </g>
      <g
        id="Number-button-4"
        transform="translate(0.000000, 125.000000)"
        @click="addToInputId(4)"
      >
        <rect id="number-4" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-4)"
            xlink:href="#number-4"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-4"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">4</tspan>
        </text>
      </g>
      <g
        id="Number-button-5"
        transform="translate(58.000000, 125.000000)"
        @click="addToInputId(5)"
      >
        <rect id="number-5" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-10"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-10)"
            xlink:href="#number-5"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-5"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">5</tspan>
        </text>
      </g>
      <g
        id="Number-button-6"
        transform="translate(117.000000, 125.000000)"
        @click="addToInputId(6)"
      >
        <rect id="number-6" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-22"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-22)"
            xlink:href="#number-6"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-6"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">6</tspan>
        </text>
      </g>
      <g
        id="Number-button-7"
        transform="translate(0.000000, 177.000000)"
        @click="addToInputId(7)"
      >
        <rect id="number-7" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-6)"
            xlink:href="#number-7"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-7"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">7</tspan>
        </text>
      </g>

      <g
        id="Number-button-8"
        transform="translate(58.000000, 177.000000)"
        @click="addToInputId(8)"
      >
        <rect id="number-8" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-12"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-12)"
            xlink:href="#number-8"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-8"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">8</tspan>
        </text>
      </g>
      <g
        id="Number-button-9"
        transform="translate(117.000000, 177.000000)"
        @click="addToInputId(9)"
      >
        <rect id="number-9" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-24"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-24)"
            xlink:href="#number-9"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-9"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">9</tspan>
        </text>
      </g>
      <g
        id="Number-button-0"
        transform="translate(58.000000, 229.000000)"
        @click="addToInputId(0)"
      >
        <rect id="number-0" x="0" y="0" width="53" height="47" rx="12"></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-14"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-14)"
            xlink:href="#number-0"
          ></use>
          <use fill="#FFA000" fill-rule="evenodd" xlink:href="#number-0"></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="17.456" y="32.9433962">0</tspan>
        </text>
      </g>
      <g
        id="Number-button-reset"
        transform="translate(0.000000, 229.000000)"
        @click="pressReset"
      >
        <rect
          id="reset-button"
          x="0"
          y="0"
          width="53"
          height="47"
          rx="12"
        ></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-18"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-18)"
            xlink:href="#reset-button"
          ></use>
          <use
            fill="#FFA000"
            fill-rule="evenodd"
            xlink:href="#reset-button"
          ></use>
        </g>
        <text
          id="1"
          font-family="AvenirNext-Bold, Avenir Next"
          font-size="28"
          font-weight="bold"
          fill="#FFFFFF"
        >
          <tspan x="18.002" y="32.9433962">E</tspan>
        </text>
      </g>
      <g
        id="Number-button-backspace"
        transform="translate(116.000000, 229.000000)"
        @click="pressBackspace"
      >
        <rect
          id="backspace-button"
          x="0"
          y="0"
          width="53"
          height="47"
          rx="12"
        ></rect>
        <filter
          x="-13.2%"
          y="-10.6%"
          width="126.4%"
          height="129.8%"
          filterUnits="objectBoundingBox"
          id="filter-16"
        >
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0.65418365   0 0 0 0 0.410468173   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <g id="button-bg" class="numpad-button">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-16)"
            xlink:href="#backspace-button"
          ></use>
          <use
            fill="#FFA000"
            fill-rule="evenodd"
            xlink:href="#backspace-button"
          ></use>
        </g>
        <path
          id="Line"
          d="M26,22.5 L42.5,22.5 L42.5,24.5 L26,24.5 L26,30.5 L12,23.5 L26,16.5 L26,22.5 Z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        ></path>
      </g>

      <rect
        id="Rectangle"
        fill="#5C6BC0"
        x="0"
        y="0"
        width="170"
        height="55"
      ></rect>
      <text
        id="pokemon-id"
        font-family="SevenSegmentRegular, Seven Segment"
        font-size="42"
        font-weight="normal"
        fill="#AFB8E1"
        text-anchor="end"
      >
        <tspan x="155" y="42">{{ inputId }}</tspan>
      </text>
    </g>
    <g id="Number-button-enter" @click="pressEnter">
      <rect
        id="enter-button"
        fill="#BD3225"
        x="147"
        y="434"
        width="170"
        height="49"
        rx="6"
      ></rect>
      <text
        id="ENTER"
        font-family="AvenirNext-Heavy, Avenir Next"
        font-size="20"
        font-weight="600"
        fill="#FFA000"
      >
        <tspan x="194.39" y="465">ENTER</tspan>
      </text>
    </g>
  </g>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pokemon } from "../models/Pokemon";

@Component({})
export default class RightPanel extends Vue {
  @Prop() pokemon!: Pokemon;
  @Prop() loading!: boolean;

  inputId: string = this.pokemon.id.toString();
  reset: boolean = true;
  entered: boolean = false;

  addToInputId(number: number): void {
    if (this.reset) {
      this.inputId = "";
      this.reset = false;
    }
    if (
      parseInt(this.inputId + number) <= 807 &&
      parseInt(this.inputId + number) !== 0
    ) {
      this.inputId += number;
      this.entered = false;
    }
  }

  pressEnter(): void {
    const id = parseInt(this.inputId);
    if (this.entered === false && id > 0) this.$emit("changePokemon", id);
    this.reset = true;
    this.entered = true;
  }

  pressBackspace(): void {
    if (this.inputId.length > 0) {
      this.reset = false;
      this.inputId = this.inputId.slice(0, -1);
    }
  }

  pressReset(): void {
    this.inputId = "";
  }

  changePokemon(event: Event): void {
    this.$emit("changePokemon", (event.target as HTMLInputElement).value);
  }
}
</script>

<style lang="scss" scoped>
.numpad-button,
tspan {
  cursor: pointer;
}
</style>
