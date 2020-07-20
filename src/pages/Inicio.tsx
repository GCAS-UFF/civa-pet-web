import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { MenuInferior } from '../components';

const Inicio = () => {
  return (
    <Container maxWidth="sm">
      <Typography role="h1" variant="h2">
        Início
      </Typography>
      <MenuInferior />
    </Container>
  );
};
export default Inicio;
