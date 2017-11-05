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
  <Route path={path} render={(props) => (signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    )
  )} />
);

const Homeless = ({component: Component, path, hasCity}) => (
  <Route path={path} render={(props) => (hasCity ? (
      <Component {...props} />
    ) : (
      <Redirect to="/cities" />
    )
  )} />
);

const mapStateToProps = ({ session }) => {
  let hasCity;
  if (session.currentUser) {
    hasCity = Boolean(session.currentUser.city_id);
  }

  return {
    signedIn: Boolean(session.currentUser),
    hasCity
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
export const HomelessRoute = withRouter(connect(mapStateToProps, null)(Homeless));
