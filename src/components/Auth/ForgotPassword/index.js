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
import {
  R_SIGN_IN,
  R_SIGN_UP,
  R_FORGOT_PASS_CONFIRMATION,
} from '../../../router/constants';
import forgotPasswordSchema from './validation';
import Copyright from '../../Copyright';
import Avatar from '../../custom/Avatar';
import FormWrapper from '../../custom/FormWrapper';
import FormikForm from '../../custom/FormikForm';
import Button from '../../custom/Button';
import AlertText from '../../custom/AlertText';
import { forgotPassword } from '../../../amplify';

export default function ForgotPassword(props) {
  const initialFormValues = {
    username: '',
  };
  const [cognitoErrors, setCognitoErrors] = useState(null);

  const clearErrorState = () => {
    setCognitoErrors(null);
  };

  const handleSubmit = async ({ username }) => {
    // Form validation
    clearErrorState();

    // AWS Cognito Sign Up
    try {
      await forgotPassword(username);
      props.history.push(R_FORGOT_PASS_CONFIRMATION);
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
          Request Password Reset
        </Typography>
        <Formik
          initialValues={initialFormValues}
          validationSchema={forgotPasswordSchema}
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
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={props.isSubmitting || !_.isEmpty(props.errors)}
              >
                Send Request
              </Button>
              <Grid container justify="flex-end">
                <Grid item xs>
                  <Link href={R_SIGN_IN} variant="body2">
                    Have an account? Sign in
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
