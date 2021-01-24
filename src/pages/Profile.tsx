import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

const Profile = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h4">
        Perfil
      </Typography>
      <BottomNavbar tab={NavMenuTab.PROFILE} />
    </Grid>
  );
};

export default Profile;
