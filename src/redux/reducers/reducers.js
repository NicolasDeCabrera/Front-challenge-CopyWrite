import {
SEARCH_WORD,

} from "../actions/actions";

const initialState = {
words:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
      case SEARCH_WORD:
        return {
            ...state,
            words: [action.payload,...state.words]
          };
    default:
      return state;
  }
}

export default rootReducer;
