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
import SalesHubSite from './app/views/SalesHubSite';

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
    <RouteWithLayout component={SignIn} exact layout={MinimalLayout} path="/" />

    <RouteWithLayout
      component={PageNotFound}
      exact
      layout={BlankLayout}
      path="*"
    />

    <RouteWithLayout
      component={SalesHubSite}
      exact
      layout={BlankLayout}
      path="/saleSite"
    />

    <Redirect to="/not-found" />
  </Switch>
);

export default SalesHubRoutes;
