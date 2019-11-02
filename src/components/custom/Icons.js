import { withStyles } from '@material-ui/core';
import { red, green, blue, orange } from '@material-ui/core/colors';
import {
  Delete,
  Check as CheckIcon,
  Close as CloseIcon,
  Edit,
  Visibility,
} from '@material-ui/icons';

export const Check = withStyles(() => ({
  root: {
    color: green[500],
  },
}))(CheckIcon);

export const Close = withStyles(() => ({
  root: {
    color: green[500],
  },
}))(CloseIcon);

export const Eye = withStyles(() => ({
  root: {
    color: blue[200],
  },
}))(Visibility);

export const Pencil = withStyles(() => ({
  root: {
    color: orange[200],
  },
}))(Edit);

export const Trash = withStyles(() => ({
  root: {
    color: red[500],
  },
}))(Delete);
