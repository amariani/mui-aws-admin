import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actions';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the articles with the ones from the server
      return {
        ...state,
        loading: false,
        articles: action.payload.posts,
      };
    case FETCH_POSTS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have articles to display anymore, so set `articles` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the articles around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        articles: [],
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

// Selectors
export const getPosts = state => state.posts;
export const getPostsPending = state => state.loading;
export const getPostsError = state => state.error;
