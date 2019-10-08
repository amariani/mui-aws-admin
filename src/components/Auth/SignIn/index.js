import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
  Box,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import _ from 'lodash';
import {
  R_DEFAULT,
  R_SIGN_UP,
  R_FORGOT_PASS_REQUEST,
} from '../../../router/constants';
import signInSchema from './validation';
import Copyright from '../../Copyright';
import Avatar from '../../custom/Avatar';
import FormWrapper from '../../custom/FormWrapper';
import FormikForm from '../../custom/FormikForm';
import Button from '../../custom/Button';
import AlertText from '../../custom/AlertText';
import { signIn } from '../../../amplify';

export default function SignIn(props) {
  const initialFormValues = { email: '', password: '' };
  const [cognitoErrors, setCognitoErrors] = useState(null);

  const clearErrorState = () => {
    setCognitoErrors(null);
  };

  const handleSubmit = async ({ email, password }) => {
    // Form validation
    clearErrorState();

    // AWS Cognito Sign In
    try {
      await signIn(email, password);
      props.history.push(R_DEFAULT);
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
          Sign in
        </Typography>
        <Formik
          initialValues={initialFormValues}
          validationSchema={signInSchema}
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
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    label="Email Address"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    error={props.errors.email && props.touched.email}
                    helperText={
                      props.errors.email && props.touched.email
                        ? props.errors.email
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
                    autoComplete="current-password"
                    helperText={
                      props.errors.password && props.touched.password
                        ? props.errors.password
                        : null
                    }
                  />
                </Grid>
              </Grid>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={props.isSubmitting || !_.isEmpty(props.errors)}
              >
                Sign In
              </Button>
              <Grid container justify="flex-end">
                <Grid item xs>
                  <Link href={R_FORGOT_PASS_REQUEST} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={R_SIGN_UP} variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </FormikForm>
          )}
        </Formik>
      </FormWrapper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
