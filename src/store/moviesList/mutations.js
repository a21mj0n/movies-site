export function movies(state, movie) {
   state.moviesList = movie
}

export function employees(state, movies) {
   if (!movies) {
      return state.employees = []
   }
   movies.forEach(movie => state.employees.push(movie.name))
}

export function popular(state, popular) {
   return state.popular = popular
}

export function movie(state, movie) {
   return state.movie = movie
}