import { withStyles, Tabs } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

export default withStyles(() => ({
  indicator: {
    backgroundColor: blue[100],
  },
}))(Tabs);
