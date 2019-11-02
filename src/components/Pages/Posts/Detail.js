import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Paper as PMPaper, AlertText, Loading } from '../../custom';
import { connect } from 'react-redux';
import fetchPost from '../../../redux/post/fetch';
import {
  getPost,
  getPostPending,
  getPostError,
} from '../../../redux/post/selectors';

const PostList = props => {
  const { getPost, error, loading, post } = props;
  const id = parseInt(props.match.params.number, 10);

  useEffect(() => {
    getPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Post List */}
      <Grid item xs={12}>
        <PMPaper>
          {error && <AlertText>Error! {error.message}</AlertText>}
          {!error && (
            <Loading isLoading={loading}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </Loading>
          )}
        </PMPaper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  post: getPost(state),
  loading: getPostPending(state),
  error: getPostError(state),
});

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  getPost: fetchPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
