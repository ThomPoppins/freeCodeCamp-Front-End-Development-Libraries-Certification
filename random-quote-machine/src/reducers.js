import { combineReducers } from "redux";
import {
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "./actions.js";

// reducer for fetching a random quote
export const fetchQuoteReducer = (state = { text: "", author: "" }, action) => {
  // q: how do I access the action creator's payload?
  // a: action.payload
  // https://stackoverflow.com/questions/39418555/how-to-access-action-creators-payload

  switch (action.type) {
    case FETCH_QUOTE_SUCCESS:
      return {
        text: action.payload.text,
        author: action.payload.author,
      };
    case FETCH_QUOTE_FAILURE:
      return {
        text: "FETCHING FAILED!",
        author: "Thom Veldpaus",
      };
    case FETCH_QUOTE_REQUEST:
      return state;
    default:
      return state;
  }
};

// root reducer, for combining all reducers
const rootReducer = combineReducers({
  quote: fetchQuoteReducer,
});

export default rootReducer;
