import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { R_POSTS } from '../constants';
import { List, Detail } from '../../components/Pages/Posts';

const PostsRouter = () => (
  <Switch>
    <Route exact path={R_POSTS} component={List} />
    <Route path={`${R_POSTS}/:number`} component={Detail} />
  </Switch>
);

export default PostsRouter;
