<template>
  <div class="card hoverable" v-if="movie">
    <div class="card-image waves-effect waves-block waves-light">
      <router-link :to="{ name: 'movie', params: { id: movie.id } }">
        <img class="activator" :src="imagePath + movie.poster_path" height="350" />
      </router-link>
    </div>
    <div class="card-content">
      <router-link
        :to="{ name: 'movie', params: { id: movie.id } }"
        class="text-black truncate"
      >{{ movie.title }}</router-link>
      <a href="#!" class="activator">
        <i class="material-icons right">more_vert</i>
      </a>
      <p>Release date: {{ movie.release_date }}</p>
      <star-rating
        :rating="movie.vote_average"
        :read-only="true"
        :increment="0.1"
        :star-size="15"
        :max-rating="10"
      />
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">
        {{ movie.title }}
        <i class="material-icons right">close</i>
      </span>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import { IMAGE_PATH } from "../constants/consts";

export default {
  name: "CardComponent",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imagePath: IMAGE_PATH
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 450px;
  width: 300px;
  margin: 10px;
  .card-content {
    padding: 15px;

    p {
      font-weight: bolder;
    }
  }
}
</style>
