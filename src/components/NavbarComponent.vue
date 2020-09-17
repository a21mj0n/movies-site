<template>
  <nav class="navbar-fixed">
    <div class="container nav-wrapper">
      <div class="brand-logo-div">
        <router-link :to="{ name: 'home' }" class="brand-logo">
          <img src="/images/logo1.png" alt="Brand Movies" />
        </router-link>
      </div>

      <div class="right-side">
        <form class="flex">
          <input v-model="query" type="text" placeholder="Search..." style="color: #fff" />
        </form>

        <ul class="right hide-on-med-and-down">
          <li v-for="link in links" :key="link.id" class="hvr-underline-from-center">
            <router-link :to="{ name: link.url }">
              <i class="material-icons left">{{ link.icon }}</i>
              {{ upperCase(link.name) }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    {{ query ? search : 'query not given' }}
  </nav>
</template>

<script>
import { upperCase } from "lodash";
import { mapState } from "vuex";
import { NAVBAR_LINKS } from "../constants/navbarLinks";

export default {
  name: "HeaderComponent",
  data() {
    return {
      links: NAVBAR_LINKS,
      selectedEmployee: null,
      movie_id: 550,
      page: 1,
      query: ""
    };
  },
  computed: {
    ...mapState("moviesList", ["employees"]),
    ...mapState("search", ["search"])
  },
  created() {
    this.$store.dispatch("moviesList/fetchEmployees", {
      movie_id: this.movie_id,
      page: this.page
    });
  },
  watch: {
    query(newQuery) {
      if (newQuery) {
        this.$store.dispatch("search/searchMulti", {
          query: newQuery,
          page: this.page
        });
      }
    }
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

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .right-side {
    display: flex;
  }

  .brand-logo-div {
    width: 150px;
    height: 50px;
  }

  .input-field {
    width: 150px;
    color: #ffffff;
  }
}

.flex {
  display: flex;
}
</style>
