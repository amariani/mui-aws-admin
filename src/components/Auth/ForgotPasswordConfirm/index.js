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
import { R_SIGN_UP, R_CHANGE_PASS_SUCCESS } from '../../../router/constants';
import confirmPasswordChangeSchema from './validation';
import Copyright from '../../Copyright';
import Avatar from '../../custom/Avatar';
import FormWrapper from '../../custom/FormWrapper';
import FormikForm from '../../custom/FormikForm';
import Button from '../../custom/Button';
import AlertText from '../../custom/AlertText';
import { forgotPasswordSubmit } from '../../../amplify';

export default function SignIn(props) {
  const initialFormValues = {
    email: '',
    verificationcode: '',
    newpassword: '',
  };
  const [cognitoErrors, setCognitoErrors] = useState(null);

  const clearErrorState = () => {
    setCognitoErrors(null);
  };

  const handleSubmit = async ({ email, verificationcode, newpassword }) => {
    // Form validation
    clearErrorState();

    // AWS Cognito Sign In
    try {
      await forgotPasswordSubmit(email, verificationcode, newpassword);
      props.history.push(R_CHANGE_PASS_SUCCESS);
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
        <Typography component="h1" variant="h5" gutterBottom>
          Reset Password
        </Typography>
        <Typography component="p" variant="subtitle1" gutterBottom>
          Enter your account email, the code we sent to your inbox and your new
          password.
        </Typography>
        <Typography component="p" variant="subtitle2" color="textSecondary">
          If you’re still not receiving the email, please check your spam folder
          to be sure that our emails are not being detected as spam.
        </Typography>
        <Formik
          initialValues={initialFormValues}
          validationSchema={confirmPasswordChangeSchema}
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
                    name="verificationcode"
                    id="verificationcode"
                    label="Verification Code"
                    value={props.values.verificationcode}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={
                      props.errors.verificationcode &&
                      props.touched.verificationcode
                    }
                    helperText={
                      props.errors.verificationcode &&
                      props.touched.verificationcode
                        ? props.errors.verificationcode
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="newpassword"
                    type="password"
                    id="newpassword"
                    label="New Password"
                    value={props.values.newpassword}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={
                      props.errors.newpassword && props.touched.newpassword
                    }
                    helperText={
                      props.errors.newpassword && props.touched.newpassword
                        ? props.errors.newpassword
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
                Reset Password
              </Button>
              <Grid container justify="flex-end">
                <Grid item xs>
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
