import { withStyles, Typography } from '@material-ui/core';
import { green, blue, red, yellow, grey } from '@material-ui/core/colors';

const Base = withStyles(() => ({
  root: {
    fontSize: 12,
  },
}))(Typography);

export const Title = withStyles(() => ({
  root: {
    color: grey[600],
  },
}))(Base);

export const Warning = withStyles(() => ({
  root: {
    color: yellow[400],
  },
}))(Base);

export const Success = withStyles(() => ({
  root: {
    color: green[400],
  },
}))(Base);

export const Alert = withStyles(() => ({
  root: {
    color: red[400],
  },
}))(Base);

export const Info = withStyles(() => ({
  root: {
    color: blue[400],
  },
}))(Base);

export const Help = withStyles(() => ({
  root: {
    color: grey[400],
  },
}))(Base);
