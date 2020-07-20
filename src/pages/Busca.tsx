import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MenuInferior } from '../components';
import { MenuTab } from '../components/MenuInferior/MenuTab.enum';

const Busca = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Busca
      </Typography>
      <MenuInferior tab={MenuTab.BUSCA} />
    </Grid>
  );
};

export default Busca;
