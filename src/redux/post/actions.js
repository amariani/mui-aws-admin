export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const fetchPostBegin = () => ({
  type: FETCH_POST_BEGIN,
});

export const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  payload: { post },
});

export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  payload: { error },
});
