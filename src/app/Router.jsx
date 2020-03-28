import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import { PageNotFound, AdminPanel, SignInScreen, SignUpScreen } from './components';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/register/:registrationToken">
          <SignUpScreen />
        </Route>
        <PrivateRoute path="/admin">
          <AdminPanel />
        </PrivateRoute>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

/**
 * Gets user login state and redirects away to login if not logged in.
 */
function PrivateRoute({ children, ...rest }) {
  // Get user object from redux state and check if logged in
  const isLoggedIn = useSelector(state => state.auth.user != null);

  // What to render - redirect if not logged in
  const routeChildren = params =>
    isLoggedIn ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: params.location }
        }}
      />
    );

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={routeChildren}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;