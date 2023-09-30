import React, { lazy, Suspense, useState } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Progress from './components/Progress';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';

// const MarketingLazy = lazy(() => import('./components/MarketingApp'));
// const AuthLazy = lazy(() => import('./components/AuthApp'));
// const DashboardLazy = lazy(() => import('./components/DashboardApp'));

import MarketingApp from "./components/MarketingApp";
import AuthApp from './components/AuthApp';
import DashboardApp from './components/DashboardApp'


const theme = createTheme({
  // Add your theme configuration here
});

const customClassName = 'ma-custom'; // Customize the class name prefix here

const history = createBrowserHistory();

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <div className={customClassName}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />

          <Route path="/auth">
            <AuthApp onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/dashboard">
            {!isSignedIn && <Redirect to="/" />}
            <DashboardApp />
          </Route>
          <Route path="/" component={MarketingApp} />

          {/* <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense> */}

        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App