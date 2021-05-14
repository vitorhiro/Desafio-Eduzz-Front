import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Drawer from './components/Drawer';
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Drawer />
      <Header />
      Home
    </Container>
  );
}
