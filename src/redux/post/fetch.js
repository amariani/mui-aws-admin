import { fetchPostBegin, fetchPostSuccess, fetchPostFailure } from './actions';
import API from '../../libs/api';

const fetchPost = postId => {
  // Thunk function, accept dispatch and getState
  return dispatch => {
    dispatch(fetchPostBegin());
    API.posts
      .retrieve(postId)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchPostSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchPostFailure(error));
      });
  };
};

export default fetchPost;
