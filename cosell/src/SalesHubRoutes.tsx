/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './app/components';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  Blank as BlankLayout,
} from './app/layouts';

import VerifyEmail from './app/views/VerifyEmail';
import SignUp from './app/views/SignUp';
import PageNotFound from './app/views/PageNotFound';
import SignIn from './app/views/SignIn';
import { useHistory } from "react-router-dom";

const SalesHubRoutes = () => (
  <Switch>
    <RouteWithLayout
      component={VerifyEmail}
      exact
      layout={MinimalLayout}
      path="/verifyMail"
    />

    <RouteWithLayout
      component={SignUp}
      exact
      layout={MinimalLayout}
      path="/signUp"
    />
    <RouteWithLayout component={Hub} exact layout={MinimalLayout} path="/" />
    <RouteWithLayout component={Test} exact layout={MinimalLayout} path="/testing" />

    <RouteWithLayout
      component={PageNotFound}
      exact
      layout={BlankLayout}
      path="*"
    />

    <Redirect to="/not-found" />
  </Switch>
);

function Hub() {
  const history = useHistory();
  const routeChange = () => {
    history.push('testing');
  }
  return (
    <div>
      <h1>HUB</h1>
      <button onClick={routeChange}>Button</button>
    </div>)
}

function Test() {
  return (
    <div>
      <h1>Testing</h1>
    </div>)
}

export default SalesHubRoutes;
