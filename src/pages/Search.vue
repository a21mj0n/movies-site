<template>
  <div class="container">
    <div class="d-flex align-items-center my-3">
      <input
        class="mr-3"
        v-model="query"
        type="text"
        placeholder="Type moive name"
        style="color: #000"
      />
      <button class="btn btn-primary" @click="searchMulti">Search</button>
    </div>
    <div v-if="search.results && query !== null">
      <ul
        type="none"
        v-for="movie in search.results"
        :key="movie.id"
        :movie="search"
        class="d-flex column"
      >
        <li>
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters class="mb-0 hoverable">
              <b-col md="6">
                <router-link :to="{ name: 'movie', params: { id: movie.id } }">
                  <b-card-img
                    :src="
                      movie.backdrop_path !== null
                        ? imagePath + movie.backdrop_path
                        : '/images/cm-img.png'
                    "
                    :alt="movie.title"
                    class="rounded-0 h-100"
                  ></b-card-img>
                </router-link>
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <h2 class="text-dark">
                    <router-link
                      :to="{ name: 'movie', params: { id: movie.id } }"
                      >{{
                        !movie.title ? movie.name : movie.title
                      }}</router-link
                    >
                  </h2>
                  <b-card-text>
                    <star-rating
                      :rating="movie.vote_average"
                      :read-only="true"
                      :increment="0.1"
                      :star-size="15"
                      :max-rating="10"
                    />
                    <p class="mt-2">
                      {{ truncate(movie.overview, { length: 400 }) }}
                    </p>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </li>
      </ul>
    </div>
    <div v-else class="d-flex justify-content-center align-items-center empty">
      <div class="text-center">
        <i class="material-icons">error</i>
        <h3>
          Поиск фильмов
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { IMAGE_PATH } from "../constants/consts";
import { truncate } from "lodash";

export default {
  name: "SearchPage",
  data() {
    return {
      imagePath: IMAGE_PATH,
      query: null,
      page: 1
    };
  },
  computed: {
    ...mapState("search", ["search"])
  },
  watch: {
    query: {
      handler: "searchMulti",
      immediate: true
    }
  },
  methods: {
    truncate,
    searchMulti() {
      this.$store.dispatch("search/searchMulti", {
        query: this.query,
        page: this.page
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  height: 100vh;
  .material-icons {
    font-size: 150px;
  }
}
</style>