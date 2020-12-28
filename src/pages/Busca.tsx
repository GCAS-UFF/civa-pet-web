import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';

const Busca = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Busca
      </Typography>
      <BottomNavbar tab={NavMenuTab.SEARCH} />
    </Grid>
  );
};

export default Busca;
