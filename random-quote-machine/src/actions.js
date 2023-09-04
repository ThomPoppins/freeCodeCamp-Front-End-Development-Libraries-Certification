// import FETCH_QUOTE from "./globals.js";

// // action creator
// export const fetchRandomQuote = () => ({
//   type: FETCH_QUOTE,
//   payload: {
//     text: "This is a random quote",
//     author: "Anonymous",
//   },
// });

import axios from "axios";

export const FETCH_QUOTE = "FETCH_QUOTE";
export const FETCH_QUOTE_REQUEST = "FETCH_QUOTE_REQUEST";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";

export const fetchRandomQuote = () => async (dispatch) => {
  dispatch({ type: FETCH_QUOTE_REQUEST });
  try {
    const response = await axios.get("https://api.quotable.io/random");
    const data = response.data;

    dispatch({
      type: FETCH_QUOTE_SUCCESS,
      payload: { text: data.content, author: data.author },
    });
  } catch (error) {
    dispatch({ type: FETCH_QUOTE_FAILURE, payload: error.message });
  }
};
