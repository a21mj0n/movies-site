import axios from "axios";
import { API_KEY, API_BASE_URL } from '../../constants/consts';

export function searchMulti({ commit }, { query, page }) {
   axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
      .then(response => {
         commit('search', response.data)
         localStorage.setItem('search', JSON.stringify(response.data))
      })
}
