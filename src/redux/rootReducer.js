import { combineReducers } from 'redux';
import posts from './posts/reducer';
import post from './post/reducer';

export default combineReducers({
  posts,
  post,
});
