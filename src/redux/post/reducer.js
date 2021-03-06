import {
  FETCH_POST_BEGIN,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './actions';

const initialState = {
  article: {},
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_SUCCESS:
      // All done: set loading "false".
      // Also, replace the article with the ones from the server
      return {
        ...state,
        loading: false,
        article: action.payload.post,
      };
    case FETCH_POST_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have article to display anymore, so set `article` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the article around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        article: {},
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
