export function movies(state, movie) {
   state.moviesList = movie
}

export function employees(state, movies) {
   if (!movies) {
      return state.employees = []
   }
   movies.forEach(movie => state.employees.push(movie.name))
}