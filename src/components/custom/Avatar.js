import { withStyles, Avatar } from '@material-ui/core';

export default withStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}))(Avatar);
