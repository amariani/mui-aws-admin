import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  CssBaseline,
  TextField,
  Link,
  Grid,
  Container,
  Box,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import _ from 'lodash';
import { R_SIGN_IN } from '../../../router/constants';
import signUpSchema from './validation';
import Copyright from '../../Copyright';
import Avatar from '../../custom/Avatar';
import FormWrapper from '../../custom/FormWrapper';
import FormikForm from '../../custom/FormikForm';
import Button from '../../custom/Button';
import AlertText from '../../custom/AlertText';
import { signUp } from '../../../amplify';

export default function SignUp(props) {
  const initialFormValues = {
    username: '',
    password: '',
    passwordCheck: '',
  };
  const [cognitoErrors, setCognitoErrors] = useState(null);

  const clearErrorState = () => {
    setCognitoErrors(null);
  };

  const handleSubmit = async ({ username, password }) => {
    // Form validation
    clearErrorState();

    // AWS Cognito Sign Up
    try {
      await signUp({
        username,
        password,
      });
      props.history.push(R_SIGN_IN);
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      setCognitoErrors(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormWrapper>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialFormValues}
          validationSchema={signUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            // Simulates the delay of a real request
            setTimeout(() => setSubmitting(false), 3 * 1000);
          }}
        >
          {props => (
            <FormikForm>
              <AlertText>{cognitoErrors && cognitoErrors.message}</AlertText>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    type="email"
                    id="username"
                    autoComplete="email"
                    label="Email Address"
                    value={props.values.username}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={props.errors.username && props.touched.username}
                    helperText={
                      props.errors.username && props.touched.username
                        ? props.errors.username
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    type="password"
                    id="password"
                    label="Password"
                    value={props.values.password}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={props.errors.password && props.touched.password}
                    helperText={
                      props.errors.password && props.touched.password
                        ? props.errors.password
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="passwordCheck"
                    type="password"
                    id="passwordCheck"
                    label="Confirm Password"
                    value={props.values.passwordCheck}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={
                      props.errors.passwordCheck && props.touched.passwordCheck
                    }
                    helperText={
                      props.errors.passwordCheck && props.touched.passwordCheck
                        ? props.errors.passwordCheck
                        : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={props.isSubmitting || !_.isEmpty(props.errors)}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href={R_SIGN_IN} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </FormikForm>
          )}
        </Formik>
      </FormWrapper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
