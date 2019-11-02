// Selectors
export const getPosts = state => state.posts.list;
export const getPostsPending = state => state.posts.loading;
export const getPostsError = state => state.posts.error;
