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

const mapStateToProps = (state) => {
  return {signedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
