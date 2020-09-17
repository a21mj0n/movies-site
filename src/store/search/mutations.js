export function search(state, result) {
   if (result) {
      return state.search = result
   } else {
      return state.search = {}
   }

}
