import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const GoBack = props => {
  return (
    <Link href={props.url} {...props}>
      <KeyboardBackspaceIcon style={{ verticalAlign: 'bottom' }} />{' '}
      {props.children}
    </Link>
  );
};

GoBack.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GoBack;
