<template>
  <nav class="navbar-fixed">
    <div class="nav-wrapper container">
      <router-link :to="{ name: 'home' }" class="brand-logo">
        <img src="/images/logo1.png" alt="Brand Movies" />
      </router-link>
      <ul class="right hide-on-med-and-down">
        <li v-for="link in links" :key="link.id">
          <router-link :to="{ name: link.url }">
            <i class="material-icons left">{{ link.icon }}</i>
            {{ upperCase(link.name) }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { upperCase } from "lodash";
import { mapState } from "vuex";

export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        {
          id: 2,
          name: "movies",
          url: "movies",
          icon: "video_library"
        },
        {
          id: 3,
          name: "celebrities",
          url: "celebrities",
          icon: "wc"
        },
        {
          id: 4,
          name: "news",
          url: "news",
          icon: "speaker_notes"
        }
      ],
      selectedEmployee: null,
      movie_id: 550,
      page: 1
    };
  },
  computed: {
    ...mapState("moviesList", ["employees"])
  },
  created() {
    this.$store.dispatch("moviesList/fetchEmployees", {
      movie_id: this.movie_id,
      page: this.page
    });
  },
  methods: {
    upperCase
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: url("/images/ft-bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  position: sticky;
  top: 0;
}
</style>
