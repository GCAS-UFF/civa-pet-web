import React from 'react';
import { MenuInferior } from '../components';
import { Typography, Grid } from '@material-ui/core';
import { MenuTab } from '../components/MenuInferior/MenuTab.enum';

const Perfil = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Perfil
      </Typography>
      <MenuInferior tab={MenuTab.PERFIL} />
    </Grid>
  );
};

export default Perfil;
