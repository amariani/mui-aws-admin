import {
  fetchPostsBegin,
  fetchPostsSuccess,
  fetchPostsFailure,
} from './postActions';

const fetchPosts = () => {
  // Thunk function, accept dispatch and getState
  return dispatch => {
    dispatch(fetchPostsBegin());
    fetch('https://jsonplaceholder.typicode.com/posts')
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
