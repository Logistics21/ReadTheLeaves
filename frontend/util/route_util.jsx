import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, signedIn}) => (
  <Route path={path} render={(props) => (
    !signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/cities" />
    )
  )}/>
);

const Protected = ({component: Component, path, signedIn}) => (
  <Route path={path} render={(props) => (signedIn ? (<Component {...props} />) : (<Redirect to="/signin" />)
  )} />
);

const mapStateToProps = (state) => {
  return {signedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
