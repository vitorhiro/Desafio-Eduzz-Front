import React from 'react';
import { Card, Container, Divider } from '@material-ui/core';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Balance from './components/Balance';
import BtcPrice from './components/BtcPrice';
import Volume from './components/Volume';

import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Drawer />
      <Header />
      <div className={classes.cardArea}>
        <Card className={classes.card}>
          <Balance />
          <Divider orientation="vertical" flexItem />
          <BtcPrice />
          <Divider orientation="vertical" flexItem />
          <Volume />
        </Card>
      </div>
      Home
    </Container>
  );
}
