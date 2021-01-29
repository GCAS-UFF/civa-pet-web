import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    card: {
      marginLeft: 10,
      marginTop: 11,
    },
    title: {
      marginLeft: 10,
    },
    avatar: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
    arrow: {
      marginLeft: 120,
      marginTop: 2.5,
    },
  })
);

const style = {
  marginTop: 3,
};

function ItemPet() {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.card} container spacing={1}>
        <Grid>
          <Avatar className={classes.avatar}>N</Avatar>
        </Grid>
        <Grid className={classes.title} container item xs={8}>
          <Typography variant="h5" component="h5">
            Cachorro Pepe
          </Typography>
        </Grid>
        <Grid container item xs={1}>
          <Tooltip
            placement="right"
            style={style}
            title="Arrow"
            aria-label="arrow"
          >
            <ArrowIcon />
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemPet;
