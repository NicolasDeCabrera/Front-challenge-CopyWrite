import axios from "axios";
export const SEARCH_WORD = "SEARCH_WORD";


 export function setMenuPage(element,value) {
  return { type: "SET_MENU_PAGE", payload:{element,value}};
 }
 export function setImgZoom(src) {
    return { type: "SET_IMG_ZOOM", payload:src}
}

export function searchWord(word) {
  return function (dispatch) {
    return axios.get(`https://api-callenge-copywrite.herokuapp.com/iecho?text=${word}`)
      .then((response) => {
        dispatch({ type: "SEARCH_WORD", payload: response.data})
      })
  };
}
