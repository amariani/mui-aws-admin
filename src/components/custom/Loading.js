import React from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';

const CustomCircularProgress = () => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Grid item xs style={{ textAlign: 'center' }}>
            <CircularProgress />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

/**
 * Loading
 * Main pourpuse of this component is to allow readability on components
 * while removing responsability from components and also incresing reusability
 */
const Loading = ({ isLoading, children }) =>
  isLoading ? <CustomCircularProgress /> : children;

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
