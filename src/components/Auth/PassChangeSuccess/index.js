import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Button from '../../custom/Button';
import { R_DEFAULT } from '../../../router/constants';

export default function PassChangeSuccess(props) {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item xs>
            <Typography variant="h1" color="primary" align="center">
              Congratulations
            </Typography>
            <Typography variant="h3" color="textSecondary" align="center">
              Your password has been changed
            </Typography>
          </Grid>
          <Grid item xs>
            <Button
              color="primary"
              variant="contained"
              onClick={() => props.history.push(R_DEFAULT)}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
