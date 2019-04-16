<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        {{ ip }}
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      ip: null
    };
  },
  async mounted() {
    const ip = await this.$axios.$get('http://icanhazip.com');
    this.ip = ip;
  }
};
</script>
