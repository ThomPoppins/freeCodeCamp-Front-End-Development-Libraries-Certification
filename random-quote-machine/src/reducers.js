const FETCH_QUOTE = "FETCH_QUOTE";

// reducer for fetching quotes
export const rootReducer = (
  state = { quotes: [], isFetching: false },
  action
) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
