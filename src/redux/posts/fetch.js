import {
  fetchPostsBegin,
  fetchPostsSuccess,
  fetchPostsFailure,
} from './actions';
import API from '../../libs/api';

const fetchPosts = () => {
  // Thunk function, accept dispatch and getState
  return dispatch => {
    dispatch(fetchPostsBegin());
    API.posts
      .list()
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchPostsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error));
      });
  };
};

export default fetchPosts;
