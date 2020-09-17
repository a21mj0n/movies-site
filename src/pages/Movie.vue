<template>
  <div class="single-page row" :style="{ backgroundImage: imagePath + movie.backdrop_path }">
    <div class="col l3 m-6 s-12">
      <img :src="imagePath + movie.poster_path" :alt="movie.title" width="100%" />
      <a :href="movie.homepage" class="btn btn-block">
        {{ upperCase('watch trailer') }}
        <i class="material-icons left">play_arrow</i>
      </a>
    </div>
    <div class="col l9 m-6 s-12">
      <div>
        <h4 class="text-center">
          {{ movie.title }}
          <span class="text-black">{{ movie.release_date }}</span>
        </h4>
      </div>
      <div class="movie-videos">
        <iframe
          src="https://www.youtube.com/embed/01ON04GCwKs"
          data-src="https://www.youtube.com/embed/01ON04GCwKs"
          frameborder="0"
          width="500"
          height="500"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { IMAGE_PATH } from "../constants/consts";
import { upperCase } from "lodash";
export default {
  name: "MoviePage",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      imagePath: IMAGE_PATH
    };
  },
  computed: {
    ...mapState("moviesList", ["movie"])
  },
  created() {
    this.$store.dispatch("moviesList/fetchMovie", this.id);
  },
  methods: {
    upperCase
  }
};
</script>

<style scoped>
.single-page {
  padding: 10px;
}
.movie-videos {
  display: flex;
  justify-content: space-around;
}
</style>