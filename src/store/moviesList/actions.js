import axios from "axios";
import { API_KEY, API_BASE_URL } from '../../constants/consts';

export function fetchMovies({ commit }, movie_id) {
   axios.get(`${API_BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
         commit('movies', response.data)
      })
}

export function fetchEmployees({ commit }, { movie_id, page }) {
   axios.get(`${API_BASE_URL}/movie/${movie_id}/lists?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(response => {
         commit('employees', response.data.results)
      })
}

export function fetchPopularMovies({ commit }, page) {
   axios.get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then(response => {
         commit('popular', response.data)
      })
}

export function fetchMovie({ commit }, movie_id) {
   axios.get(`${API_BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
         commit('movie', response.data)
      })
}