import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Paper, AlertText, Loading, GoBack } from '../../custom';
import { connect } from 'react-redux';
import fetchPost from '../../../redux/post/fetch';
import { R_POSTS } from '../../../router/constants';
import {
  getPost,
  getPostPending,
  getPostError,
} from '../../../redux/post/selectors';
import {
  getAuthor,
  getUserPending,
  getUserError,
} from '../../../redux/user/selectors';

const PostList = props => {
  const {
    getPost,
    error,
    loading,
    post,
    errorUser,
    loadingUser,
    author,
  } = props;
  const id = parseInt(props.match.params.number, 10);

  useEffect(() => {
    getPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <GoBack url={R_POSTS}>Posts list</GoBack>
      </Grid>
      {/* Post List */}
      <Grid item xs={12}>
        <Paper>
          {error && <AlertText>Error! {error.message}</AlertText>}
          {errorUser && <AlertText>Error! {errorUser.message}</AlertText>}
          {!error && (
            <Loading isLoading={loading}>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {post.body}
              </Typography>
              <Loading isLoading={loadingUser}>
                <Typography
                  align="right"
                  variant="subtitle2"
                  color="textSecondary"
                  fontSize="20"
                >
                  {' -'}
                  {author.username}
                </Typography>
              </Loading>
            </Loading>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  post: getPost(state),
  loading: getPostPending(state),
  error: getPostError(state),
  loadingUser: getUserPending(state),
  errorUser: getUserError(state),
  author: getAuthor(state),
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
