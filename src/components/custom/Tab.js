import { withStyles, Tab } from '@material-ui/core';

export default withStyles(({ breakpoints }) => ({
  root: {
    fontSize: 12,
  },
  selected: {
    fontSize: 14,
    [breakpoints.up('sm')]: {
      fontSize: 16,
    },
    fontWeight: 'bold',
  },
}))(Tab);
