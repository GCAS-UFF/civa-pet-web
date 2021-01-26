import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

const Home = () => {
  return (
    <Grid container>
      <Typography role="h1" variant="h4">
        Início
      </Typography>
      <BottomNavbar />
    </Grid>
  );
};
export default Home;
