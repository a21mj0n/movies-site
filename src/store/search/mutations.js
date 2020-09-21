export function search(state) {
   if (localStorage.getItem('search')) {
      return state.search = JSON.parse(localStorage.getItem('search'))
   } else {
      return state.search = {}
   }

}
