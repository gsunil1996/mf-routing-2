import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFoundApp';

const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'au-custom'; // Customize the class name prefix here

export default function App({ history, onSignIn }) {
  // console.log("history", history)
  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
