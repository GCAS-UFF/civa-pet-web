import React from 'react';
import Router from './Router';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
