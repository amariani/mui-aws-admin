import React from 'react';
import { Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.root}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://yourcompany.com/">
        Your Company
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
