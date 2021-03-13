import React from 'react';
//import Grid from '@material-ui/core/Grid';
import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

interface ApplicationFormProps {
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    text: {
      fontWeight: 'bold',
      marginTop: theme.spacing(2),
    },
    form: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(4),
    },
    colorInput: {
      backgroundColor: '#FBEEFF',
    },
    btn: {
      textAlign: 'center',
    },
  })
);

function ApplicationForm() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  console.log(register);
  return (
    <Grid className={classes.root}>
      <Grid container direction={'row'} xs={12} sm={6} md={9}>
        <ArrowIcon color="action" />
        <Typography>Voltar</Typography>
      </Grid>
      <Grid>
        <Typography variant="h3" className={classes.text}>
          Aplicação
        </Typography>
      </Grid>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(data =>
          alert(JSON.stringify({ vaccine: data }))
        )}
      >
        <FormControl fullWidth>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Nome da Vacina</InputLabel>
            <OutlinedInput
              className={classes.colorInput}
              id="component-outlined"
              label="Nome da Vacina"
              style={{ marginBottom: 10 }}
              inputRef={register}
              name="name"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Laboratório</InputLabel>
            <OutlinedInput
              className={classes.colorInput}
              id="component-outlined"
              label="Laboratório"
              style={{ marginBottom: 10 }}
              inputRef={register}
              name="company"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Vencimento</InputLabel>
            <OutlinedInput
              className={classes.colorInput}
              id="component-outlined"
              label="Vencimento"
              style={{ marginBottom: 10 }}
              inputRef={register}
              name="expirationDate"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Partida</InputLabel>
            <OutlinedInput
              className={classes.colorInput}
              id="component-outlined"
              label="Partida"
              style={{ marginBottom: 10 }}
              inputRef={register}
              name="batch"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Peso do Pet</InputLabel>
            <OutlinedInput
              className={classes.colorInput}
              id="component-outlined"
              label="Peso do Pet"
              style={{ marginBottom: 10 }}
              inputRef={register}
              name="petWeight"
            />
          </FormControl>
        </FormControl>
        <Grid container xs={12} justify="center">
          <Button type="submit">Enviar</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default ApplicationForm;
