import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchPosts from './fetchPosts';

const PostList = props => {
  const { getPosts, error, loading, posts } = props;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.articles,
  loading: state.posts.loading,
  error: state.posts.error,
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
)(PostList);
