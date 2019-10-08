import React from 'react';
import { Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Form className={classes.root} {...props}>
      {children}
    </Form>
  );
};
