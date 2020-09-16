<template>
  <header class="ht-header">
    <div class="container">
      <nav class="navbar navbar-default navbar-custom">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header logo">
          <div
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <div id="nav-icon1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a href="index-2.html">
            <img class="logo" src="/images/logo1.png" alt width="119" height="58" />
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav flex-child-menu menu-left">
            <li class="hidden">
              <a href="#page-top"></a>
            </li>
            <li class="dropdown first">
              <router-link class="btn btn-default dropdown-toggle lv1" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="dropdown first">
              <router-link
                class="btn btn-default dropdown-toggle lv1"
                :to="{ name: 'movies' }"
              >movies</router-link>
            </li>
            <li class="dropdown first">
              <router-link
                class="btn btn-default dropdown-toggle lv1"
                :to="{ name: 'celebrities' }"
              >celebrities</router-link>
            </li>
            <li class="dropdown first">
              <router-link class="btn btn-default dropdown-toggle lv1" :to="{ name: 'news' }">news</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </nav>
    </div>
  </header>
</template>

<script>
import { upperCase } from "lodash";
export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        {
          id: 1,
          name: "home",
          url: "home"
        },
        {
          id: 2,
          name: "movies",
          url: "movies"
        },
        {
          id: 3,
          name: "celebrities",
          url: "celebrities"
        },
        {
          id: 4,
          name: "news",
          url: "news"
        },
        {
          id: 5,
          name: "community",
          url: "community"
        }
      ]
    };
  },
  methods: {
    upperCase
  }
};
</script>

<style>
</style>