import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

const styles = ({ palette }) => {
  return {
    root: {
      color: palette.primary.contrastText,
      background: palette.primary.light,
      '& svg': {
        '& path': {
          fill: palette.primary.contrastText,
        },
      },
      '&:hover': {
        color: palette.primary.main,
        '& svg': {
          '& path': {
            fill: palette.primary.main,
          },
        },
      },
    },
  };
};

const ListItemLink = props => {
  const { icon, primary, to, classes } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
        // See https://github.com/ReactTraining/react-router/issues/6056
        <RouterLink
          to={to}
          {...itemProps}
          activeClassName={classes.root}
          exact={to === '/'}
          innerRef={ref}
        />
      )),
    [to, classes]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default withStyles(styles)(ListItemLink);
