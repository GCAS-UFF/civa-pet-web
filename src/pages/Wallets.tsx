import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';
import ItemPet from '../components/ItemPet/ItemPet';

const Wallets = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Carteiras
      </Typography>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <ItemPet name="Maria Flor" />
        </Grid>
        <Grid item xs={12}>
          <ItemPet name="Pepe" />
        </Grid>
      </Grid>
      <BottomNavbar tab={NavMenuTab.WALLETS} />
    </Grid>
  );
};

export default Wallets;
