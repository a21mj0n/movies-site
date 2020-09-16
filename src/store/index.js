import Vue from "vue";
import Vuex from "vuex";
import moviesList from "./moviesList";

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      moviesList
    }
  });

  return Store;
}
