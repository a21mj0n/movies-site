<template>
  <div class="home-page-container">
    <div class="w-100">
      <carousel
        :loop="true"
        :autoplay="true"
        :perPage="1"
        paginationActiveColor="red"
        paginationColor="#000"
        :paginationPadding="10"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <img src="/images/image191.jpg" alt="image" width="100%" height="800px" />
        </slide>
        <slide>
          <img src="/images/image21.jpg" alt="image" width="100%" height="800px" />
        </slide>
        <slide>
          <img src="/images/image171.jpg" alt="image" width="100%" height="800px" />
        </slide>
        <slide>
          <img src="/images/image141.jpg" alt="image" width="100%" height="800px" />
        </slide>
        <slide>
          <img src="/images/image151.jpg" alt="image" width="100%" height="800px" />
        </slide>
        <slide>
          <img src="/images/image161.jpg" alt="image" width="100%" height="800px" />
        </slide>
      </carousel>
    </div>

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
      <div class="d-flex justify-content-center mt-4">
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
.carusel {
  width: 93%;
}

.popular {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

