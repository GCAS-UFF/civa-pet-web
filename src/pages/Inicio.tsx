import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { MenuInferior } from '../components';

const Inicio = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Início
      </Typography>
      <MenuInferior />
    </Grid>
  );
};
export default Inicio;
