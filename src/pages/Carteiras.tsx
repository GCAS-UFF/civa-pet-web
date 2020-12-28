import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';

const Carteiras = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Carteiras
      </Typography>
      <BottomNavbar tab={NavMenuTab.WALLETS} />
    </Grid>
  );
};

export default Carteiras;
