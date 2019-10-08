import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { R_SIGN_IN } from '../../../router/constants';
import Loading from '../../custom/Loading';
import { signOut } from '../../../amplify';

export default function SignOut() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        await signOut();
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    checkSession();
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <Redirect to={R_SIGN_IN} />
    </Loading>
  );
}
