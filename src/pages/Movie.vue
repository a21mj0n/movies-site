<template>
  <div class="row w-100 py-3 px-3">
    <div class="col-md-4">
      <img :src="imagePath + movie.poster_path" :alt="movie.title" class="img-fluid" />
      <a :href="movie.homepage" class="btn btn-info btn-block mt-2">
        {{ upperCase('Watch trailer') }}
        <i class="material-icons left">play_arrow</i>
      </a>
      <a :href="movie.homepage" class="btn btn-warning btn-block mt-2">
        {{ upperCase('Home Page / Tickets') }}
        <i class="material-icons left">credit_card</i>
      </a>
    </div>
    <div class="col-md-8">
      <h1>{{ movie.title }}</h1>

      <div class="row">
        <div class="col-md-8">
          <h5 class="text-info">Rate This Movie:</h5>
          <star-rating
            class="mb-3"
            :rating="rating ? parseInt(rating) : movie.vote_average"
            :increment="0.5"
            :star-size="25"
            :max-rating="10"
            @rating-selected="ratingSelected"
          />

          <h5 class="text-danger">Overview:</h5>
          <p>{{ movie.overview }}</p>

          <div class="row">
            <div class="col-4">
              <h5 class="text-danger">Genres:</h5>
              <b-list-group class="mb-3">
                <b-list-group-item v-for="genre in movie.genres" :key="genre.id">{{ genre.name }}</b-list-group-item>
              </b-list-group>
            </div>
            <div class="col-4">
              <h5 class="text-danger">Spoken Languages:</h5>
              <b-list-group class="mb-3">
                <b-list-group-item
                  v-for="language in movie.spoken_languages"
                  :key="language.id"
                >{{ iso.getName(language.iso_639_1) }}</b-list-group-item>
              </b-list-group>
            </div>
            <div class="col-4">
              <h5 class="text-danger">Production Countries:</h5>
              <b-list-group class="mb-3">
                <b-list-group-item
                  v-for="country in movie.production_countries"
                  :key="country.id"
                >{{ (country.name) }}</b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>

        <div class="px-3">
          <h5>Production companies :</h5>
          <carousel
            :loop="true"
            :autoplay="true"
            :perPage="3"
            paginationActiveColor="red"
            paginationColor="#000"
            :paginationPadding="10"
            paginationPosition="bottom-overlay"
          >
            <slide v-for="company in movie.production_companies" :key="company.id">
              <div class>
                <b-card
                  style="height: 150px; margin-right: 25px"
                  :img-src="company.logo_path !== null 
                      ? imagePath + company.logo_path 
                      : '/images/cm-img.png'"
                  :img-alt="company.name"
                  img-width="50%"
                  img-start
                  tag="article"
                >
                  <b-card-text class="p-0">
                    <p class="text-bold">{{ company.name }}</p>
                    Country: {{ countryName(company.origin_country) }}
                  </b-card-text>
                </b-card>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { IMAGE_PATH } from "../constants/consts";
import { upperCase } from "lodash";
import ISO6391 from "iso-639-1";

export default {
  name: "MoviePage",
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      imagePath: IMAGE_PATH,
      iso: ISO6391,
      rating: null
    };
  },
  computed: {
    ...mapState("moviesList", ["movie"])
  },
  created() {
    this.$store.dispatch("moviesList/fetchMovie", this.id);
    const ratingNumber = localStorage.getItem("rating");
    if (ratingNumber) {
      this.rating = ratingNumber;
    }
  },
  methods: {
    upperCase,
    ratingSelected(rating) {
      localStorage.setItem("rating", rating);
    },
    countryName(country) {
      let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
      return regionNames.of(country);
    }
  }
};
</script>
