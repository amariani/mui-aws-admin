import { withStyles, Typography } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

export default withStyles(() => ({
  root: {
    color: red[500],
    fontStyle: 'italic',
  },
}))(Typography);
