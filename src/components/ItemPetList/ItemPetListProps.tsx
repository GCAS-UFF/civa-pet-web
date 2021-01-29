import React from 'react';
import { Grid } from '@material-ui/core';
import ItemPet from '../ItemPet/ItemPet';

interface ItemPetListProps {
  data: string[];
}

export function ItemPetList({ data }: ItemPetListProps) {
  const ItemPetMapper = (name: string) => (
    <Grid item xs={12}>
      <ItemPet name={name} />
    </Grid>
  );

  return (
    <Grid container xs={12}>
      {data.map(ItemPetMapper)}
    </Grid>
  );
}
