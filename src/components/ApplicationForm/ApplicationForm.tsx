import React, {useState} from 'react';
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
import { KeyboardDatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/moment';
import "moment/locale/pt-br";
import { Moment } from 'moment';

const useStyles = makeStyles((theme: Theme) => createStyles ({
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
      borderRadius: '60px',
      backgroundColor: '#9378FF',
      color: '#FFF',
      height: '41px',
      width: '191px',
      '&:hover': {
        background: '#6145ff',
      },
    },
  })
);

function ApplicationForm() {

  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const [selectedDate, handleDateChange] = useState<Date | null | Moment>(null); 

  return (
    <Grid className={classes.root}>
      <Grid container direction={'row'}>
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
        onSubmit={handleSubmit(vaccine =>
          alert(JSON.stringify({vaccine}))
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
              required
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
              required
            />
          </FormControl>
          <FormControl variant="outlined">            
            <MuiPickersUtilsProvider locale="pt-br" utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant='inline'
                inputVariant="outlined"
                label="Vencimento"   
                className={classes.colorInput}    
                value={selectedDate}
                format="DD/MM/YYYY"
                style={{ marginBottom: 10 }}
                onChange={date => handleDateChange(date)}    
                name="expirationDate"                         
                autoOk
                clearable
                required            
              />
            </MuiPickersUtilsProvider>
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
              required
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
              required
            />
          </FormControl>
        </FormControl>
        <Grid container justify="center">
          <Button type="submit" className={classes.btn}>
            Salvar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default ApplicationForm;
