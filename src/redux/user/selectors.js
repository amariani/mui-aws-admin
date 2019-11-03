// Selectors

const _extractAuthorFromUser = user => {
  const { username, website, email } = user;
  return { username, website, email };
};

export const getAuthor = state => _extractAuthorFromUser(state.user.data);
export const getUser = state => state.user.data;
export const getUserPending = state => state.user.loading;
export const getUserError = state => state.user.error;
