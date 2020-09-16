import axios from "axios";
import { API_KEY, API_BASE_URL } from '../../constants/consts';

export function fetchMovies({ commit }, movie_id) {
   axios.get(`${API_BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
   .then(response => {
      commit('movies', response.data)
   })
}