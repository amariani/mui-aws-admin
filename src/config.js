const {
  REACT_APP_ENDPOINT_NAME,
  REACT_APP_API_URL,
  REACT_APP_COGNITO_USER_POOL_ID,
  REACT_APP_COGNITO_REGION,
  REACT_APP_COGNITO_WEB_CLIENT_ID,
} = process.env;

export default {
  apiName: REACT_APP_ENDPOINT_NAME,
  cognito: {
    userPoolId: REACT_APP_COGNITO_USER_POOL_ID,
    region: REACT_APP_COGNITO_REGION,
    userPoolWebClientId: REACT_APP_COGNITO_WEB_CLIENT_ID,
  },
  apiURL: REACT_APP_API_URL,
};
