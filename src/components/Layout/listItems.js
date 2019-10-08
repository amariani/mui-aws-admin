import React from 'react';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  ExitToApp as SignOutIcon,
} from '@material-ui/icons';
import { R_DEFAULT, R_POSTS, R_SIGN_OUT } from '../../router/constants';
import ListItemLink from '../ListItemLink';

const mainListItems = (
  <div>
    <ListItemLink to={R_DEFAULT} primary="Dashboard" icon={<DashboardIcon />} />
    <ListItemLink to={R_POSTS} primary="Posts" icon={<PeopleIcon />} />
    <ListItemLink
      to={'/reports'}
      primary="Reports (not working)"
      icon={<BarChartIcon />}
    />
    <ListItemLink to={R_SIGN_OUT} primary="Sign Out" icon={<SignOutIcon />} />
  </div>
);

export default mainListItems;
