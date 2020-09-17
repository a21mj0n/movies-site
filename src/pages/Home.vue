<template>
  <div class="home-page-container">
    <div class="center-align videos-title--margin">
      <span class="videos-title">Popular Videos</span>
    </div>

    <div v-if="isLoading" class="pre-loader">
      <div class="preloader-wrapper active">
        <div class="spinner-layer spinner-red-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>

    <fragment v-else>
      <div class="popular">
        <card-component v-for="movie in popular.results" :key="movie.id" :movie="movie"></card-component>
      </div>
      <div class="center-align videos-title--margin">
        <paginate
          :page-count="popular.total_pages"
          :click-handler="changePage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
        ></paginate>
      </div>
    </fragment>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from "../components/CardComponent";

export default {
  name: "Home",
  components: {
    CardComponent
  },
  data() {
    return {
      page: 1,
      isLoading: true
    };
  },
  computed: {
    ...mapState("moviesList", ["popular"])
  },
  created() {
    this.$store.dispatch("moviesList/fetchPopularMovies", this.page);
    this.isLoading = false;
  },
  methods: {
    changePage(pageNumber) {
      this.$store.dispatch("moviesList/fetchPopularMovies", pageNumber);
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.popular {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.home-page-container {
  padding: 10px;
}
.videos-title {
  border-bottom: 5px solid #000000;
  font-size: 26px;
  padding-bottom: 4px;
}
.videos-title--margin {
  margin: 20px 0;
}
.pre-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  margin: 100px;
}
</style>

