import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

const Inicio = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Início
      </Typography>
      <BottomNavbar />
    </Grid>
  );
};
export default Inicio;
