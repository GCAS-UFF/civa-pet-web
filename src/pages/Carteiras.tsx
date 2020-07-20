import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MenuInferior } from '../components';
import { MenuTab } from '../components/MenuInferior/MenuTab.enum';

const Carteiras = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Carteiras
      </Typography>
      <MenuInferior tab={MenuTab.CARTEIRAS} />
    </Grid>
  );
};

export default Carteiras;
