import {
  Divider,
  Drawer as DrawerUi,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MoneyOffOutlinedIcon from '@material-ui/icons/MoneyOffOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { setDrawerVisible } from '../../../../store/modules/states/actions';
import useStyles from './styles';

const itemsMenu = [
  {
    title: 'Depositar',
    icon: <MonetizationOnOutlinedIcon style={{ fill: '#fff' }} />,
  },
  { title: 'Vender', icon: <MoneyOffOutlinedIcon style={{ fill: '#fff' }} /> },
  { title: 'Hitórico', icon: <HistoryOutlinedIcon style={{ fill: '#fff' }} /> },
  { title: 'Sair', icon: <ExitToAppOutlinedIcon style={{ fill: '#fff' }} /> },
];

function Drawer({ drawerVisible }: { drawerVisible: boolean }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDrawerVisible = () => {
    dispatch(setDrawerVisible(false));
  };

  return (
    <DrawerUi
      anchor="left"
      open={drawerVisible}
      onClose={() => handleDrawerVisible()}
      className={classes.drawer}
    >
      <div className={classes.items}>
        {itemsMenu.map((item, index) => (
          <>
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
            {index !== itemsMenu.length - 1 && (
              <Divider style={{ backgroundColor: '#fff' }} />
            )}
          </>
        ))}
      </div>
    </DrawerUi>
  );
}

const mapStateToProps = (state: { states: { drawerVisible: boolean } }) => ({
  drawerVisible: state.states.drawerVisible,
});

export default connect(mapStateToProps)(Drawer);
