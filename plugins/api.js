const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

const apiFactory = axios => ({
  getPokemonById(id) {
    return axios.get(`${baseURL}${id}`);
  }
});

export default ({ $axios }, inject) => {
  // Inject `api` key
  // -> app.$api
  // -> this.$api in vue components
  // -> this.$api in store actions/mutations
  const api = apiFactory($axios);
  inject('api', api);
};
