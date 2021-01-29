import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface ItemPetProps {
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    name: {
      paddingLeft: theme.spacing(3),
    },
    avatar: {
      height: theme.spacing(8),
      width: theme.spacing(8),
    },
  })
);

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(l => l.charAt(0))
    .join('');
}

function ItemPet({ name }: ItemPetProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction={'row'}
      alignItems={'center'}
      justify={'space-between'}
      xs={12}
    >
      <Grid container item direction={'row'} alignItems={'center'} xs={8}>
        <Avatar className={classes.avatar}>{getInitials(name)}</Avatar>
        <Typography className={classes.name} variant="h5" component="p">
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip placement="right" title="Arrow" aria-label="arrow">
          <ArrowIcon />
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default ItemPet;
