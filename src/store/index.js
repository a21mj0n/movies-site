import Vue from "vue";
import Vuex from "vuex";
import moviesList from "./moviesList";
import search from "./search";

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      moviesList,
      search
    }
  });

  return Store;
}
