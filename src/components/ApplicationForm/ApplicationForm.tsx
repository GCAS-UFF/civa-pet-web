import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface ApplicationFormProps {
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    marg: {
      marginRight: 2,
    },
  })
);

function ApplicationForm() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction={'row'} xs={12}>
      <ArrowIcon color="action" />
      <Typography>Voltar</Typography>
    </Grid>
  );
}

export default ApplicationForm;
