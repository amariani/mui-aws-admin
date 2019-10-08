import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { R_SIGN_IN } from './constants';
import { getCurrentUser } from '../amplify';
import Loading from '../components/custom/Loading';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        await getCurrentUser();
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    }

    checkSession();
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <Route
        {...rest}
        render={props => {
          if (isAuthenticated) {
            return <Component {...props} />;
          }
          return (
            <Redirect
              to={{
                pathname: R_SIGN_IN,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }}
      />
    </Loading>
  );
};

export default ProtectedRoute;
