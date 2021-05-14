import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setDrawerVisible } from '../../../../store/modules/states/actions';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleDrawerVisible = () => {
    dispatch(setDrawerVisible(true));
  };
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => handleDrawerVisible()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Eduzz Trade
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
