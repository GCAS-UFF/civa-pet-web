import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';
import { ItemPetList } from '../components/ItemPetList/ItemPetListProps';

const Wallets = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h2">
        Carteiras
      </Typography>
      <ItemPetList data={['Pepe', 'Maria Flor', 'Claire', 'Meg', 'Muffin']} />
      <BottomNavbar tab={NavMenuTab.WALLETS} />
    </Grid>
  );
};

export default Wallets;
