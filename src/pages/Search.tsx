import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  Grid,
  InputAdornment,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import { NavMenuTab } from '../components/BottomNavbar/NavMenuTab.enum';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Search() {
  const classes = useStyles();

  const [state, setState] = useState({ results: [], searchInput: '' });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newState = { ...state, [event.target.name]: event.target.value };
    setState(newState);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch() {
    // TODO: API Call
  }

  return (
    <Grid container justify={'center'}>
      <Grid item xs={8}>
        <Typography role="h1" variant="h4">
          Busca
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          className={classes.margin}
          name="searchInput"
          id="search-textfield"
          value={state.searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="search for user" onClick={handleSearch}>
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Grid>
      <BottomNavbar tab={NavMenuTab.SEARCH} />
    </Grid>
  );
}

export default Search;
