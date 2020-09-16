<template>
  <div class="main-div">
    <input v-model="search" type="text" placeholder="type Region" />
    <button class="btn btn-success" @click="fetchWeather">submit</button>
    {{ moviesList }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WeatherComponent",
  data() {
    return {
      search: "",
      apiKey: "0a0dcb5a3f45e26b6ac26e08aee58564"
    };
  },
  computed: {
    ...mapState("moviesList", ["moviesList"])
  },
  methods: {
    fetchWeather() {
      this.$store.dispatch("moviesList/fetchMovies", 150);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-div {
  width: 100%;
  height: 100vh;
  background: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F638596422140664004%2F&psig=AOvVaw17dGfhi2VP_WQU6oSnsbJO&ust=1599497273265000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODL8_P91OsCFQAAAAAdAAAAABAQ");
}
</style>
