import axios from "axios";
export const SEARCH_WORD = "SEARCH_WORD";

export function searchWord(word) {
  return function (dispatch) {
    return axios.get(`https://api-callenge-copywrite.herokuapp.com/iecho?text=${word}`)
      .then((response) => {
        dispatch({ type: "SEARCH_WORD", payload: response.data})
      })
  };
}

export function sum(n,n2){
  return n + n2;
}
