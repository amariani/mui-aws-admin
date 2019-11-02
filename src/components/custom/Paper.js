import { withStyles, Paper } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))(Paper);
