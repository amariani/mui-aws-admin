import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { R_POSTS } from '../../../router/constants';
import fetchPosts from '../../../redux/posts/fetch';
import {
  getPosts,
  getPostsPending,
  getPostsError,
} from '../../../redux/posts/selectors';
import { Grid, IconButton } from '@material-ui/core';
import {
  Paper as PMPaper,
  AlertText,
  Loading,
  Eye,
  Pencil,
  Trash,
} from '../../custom';
import Table from '../../StickyHeadTable';

const postsColumns = [
  {
    id: 'userId',
    label: 'User ID',
    minWidth: 80,
    align: 'left',
  },
  { id: 'title', label: 'Title', minWidth: 170 },
  {
    id: 'id',
    label: 'Actions',
    minWidth: 160,
    align: 'right',
    format: value => {
      return (
        <>
          <IconButton size="small" component={Link} to={`${R_POSTS}/${value}`}>
            <Eye />
          </IconButton>
          <IconButton
            size="small"
            component={Link}
            to={`${R_POSTS}/${value}/edit`}
          >
            <Pencil />
          </IconButton>
          <IconButton
            size="small"
            component={Link}
            to={`${R_POSTS}/${value}/delete`}
          >
            <Trash />
          </IconButton>
        </>
      );
    },
  },
];

const PostsList = props => {
  const { getPosts, error, loading, posts } = props;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      {/* Posts List */}
      <Grid item xs={12}>
        <PMPaper>
          {error && <AlertText>Error! {error.message}</AlertText>}
          {!error && (
            <Loading isLoading={loading}>
              <Table rows={posts} columns={postsColumns} />
            </Loading>
          )}
        </PMPaper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  posts: getPosts(state),
  loading: getPostsPending(state),
  error: getPostsError(state),
});

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  getPosts: fetchPosts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
