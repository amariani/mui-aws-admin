import config from '../config';
import Amplify, { Auth } from 'aws-amplify';

export const amplifySetup = () => {
  Amplify.configure({
    Auth: { ...config.cognito },
    API: {
      endpoints: [
        {
          name: config.apiName,
          endpoint: config.apiURL,
          custom_header: async () => {
            return {
              Authorization: `Bearer ${
                (await Auth.currentSession()).idToken.jwtToken
              }`,
            };
          },
        },
      ],
    },
  });
};

/**
 * User SignUp / SignIn / SignOut
 */
export const signUp = credentialsObj => Auth.signUp(credentialsObj);

export const signIn = (username, password) => Auth.signIn(username, password);

export const signOut = () => {
  Auth.signOut();
};

/**
 * Current User/Session
 */
export const getSession = () => Auth.currentSession();

export const getCurrentUser = () => Auth.currentAuthenticatedUser();

/**
 * Password Recovery
 */
// Forgot Password request code to email
export const forgotPassword = email => Auth.forgotPassword(email);

// Forgot Password submit code and new Password
export const forgotPasswordSubmit = (email, verificationcode, newPassword) =>
  Auth.forgotPasswordSubmit(email, verificationcode, newPassword);

// Change Password submit
export const changePassword = (user, oldPassword, newPassword) =>
  Auth.changePassword(user, oldPassword, newPassword);
