import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {
  R_SIGN_IN,
  R_SIGN_UP,
  R_SIGN_OUT,
  R_FORGOT_PASS_REQUEST,
  R_FORGOT_PASS_CONFIRMATION,
  R_CHANGE_PASS_SUCCESS,
  R_DEFAULT,
  R_POSTS,
} from './constants';
import { createBrowserHistory } from 'history';
import ProtectedRoute from './protectedRoute';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import SignOut from '../components/Auth/SignOut';
import ForgotPassword from '../components/Auth/ForgotPassword';
import ForgotPasswordConfirm from '../components/Auth/ForgotPasswordConfirm';
import PassChangeSuccess from '../components/Auth/PassChangeSuccess';
import NotFound from '../components/NotFound';
// Protected Components
import Dashboard from '../components/Dashboard';
import Posts from '../components/Posts';

const MainRouter = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path={R_SIGN_IN} component={SignIn} />
      <Route exact path={R_SIGN_UP} component={SignUp} />
      <Route exact path={R_SIGN_OUT} component={SignOut} />
      <Route exact path={R_FORGOT_PASS_REQUEST} component={ForgotPassword} />
      <Route
        exact
        path={R_FORGOT_PASS_CONFIRMATION}
        component={ForgotPasswordConfirm}
      />
      <Route exact path={R_CHANGE_PASS_SUCCESS} component={PassChangeSuccess} />
      <ProtectedRoute exact path={R_DEFAULT} component={Dashboard} />
      <ProtectedRoute exact path={R_POSTS} component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default MainRouter;
