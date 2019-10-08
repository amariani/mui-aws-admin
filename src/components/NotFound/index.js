import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Button from '../custom/Button';
import { R_DEFAULT } from '../../router/constants';

export default function NotFound(props) {
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
            <Typography variant="h1" color="textSecondary" align="center">
              Page Not Found
            </Typography>
          </Grid>
          <Grid item xs>
            <Button
              color="primary"
              variant="contained"
              onClick={() => props.history.push(R_DEFAULT)}
            >
              Go back to home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
