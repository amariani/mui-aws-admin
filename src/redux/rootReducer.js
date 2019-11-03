import { combineReducers } from 'redux';
import posts from './posts/reducer';
import post from './post/reducer';
import user from './user/reducer';

export default combineReducers({
  posts,
  post,
  user,
});
