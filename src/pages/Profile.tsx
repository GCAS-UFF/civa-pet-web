import React from 'react';
import { Grid } from '@material-ui/core';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import ItemPet from '../components/ItemPet/ItemPet';

const Profile = () => {
  return (
    <Grid container direction="column">
      <ItemPet />
      <ItemPet />
      <BottomNavbar tab={NavMenuTab.PROFILE} />
    </Grid>
  );
};

export default Profile;
