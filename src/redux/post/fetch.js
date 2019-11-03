import { fetchPostBegin, fetchPostSuccess, fetchPostFailure } from './actions';
import {
  fetchUserBegin,
  fetchUserSuccess,
  fetchUserFailure,
} from '../user/actions';
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

        dispatch(fetchUserBegin());
        API.users
          .retrieve(res.userId)
          .then(userRes => userRes.json())
          .then(userRes => {
            if (userRes.error) {
              throw userRes.error;
            }
            dispatch(fetchUserSuccess(userRes));
            dispatch(fetchPostSuccess(res));
            return res;
          })
          .catch(error => {
            dispatch(fetchUserFailure(error));
          });
      })
      .catch(error => {
        dispatch(fetchPostFailure(error));
      });
  };
};

export default fetchPost;
