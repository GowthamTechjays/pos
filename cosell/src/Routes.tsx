/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './app/components';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  Blank as BlankLayout,
} from './app/layouts';
import AccountSetup from './app/views/AccountSetup';
import CreatePartnership from './app/views/CreatePartnership';
import Dashboard from './app/views/Dashboard';
import SignIn from './app/views/SignIn';
import ForgotPassword from './app/views/ForgotPassword';
import ResetPassword from './app/views/ResetPassword';
import VerifyEmail from './app/views/VerifyEmail';
import SignUp from './app/views/SignUp';
import Profile from './app/views/Profile/Profile';
import PreviewPartnership from './app/views/PreviewPartnership';
import SalesHub from './app/views/SalesHub';
import PageNotFound from './app/views/PageNotFound';
import SolutionNarrative from './app/views/SolutionNarrative';
import UploadAssets from './app/views/UploadAssets';
import MailVerification from './app/views/MailVerification';
import SalesHubSite from './app/views/SalesHubSite';

const Routes = () => (
  <Switch>
    <RouteWithLayout component={SignIn} exact layout={MinimalLayout} path="/" />
    <RouteWithLayout
      component={ForgotPassword}
      exact
      layout={MinimalLayout}
      path="/forgotPassword"
    />
    <RouteWithLayout
      component={ResetPassword}
      exact
      layout={MinimalLayout}
      path="/resetPassword"
    />
    <RouteWithLayout
      component={VerifyEmail}
      exact
      layout={MinimalLayout}
      path="/verifyMail"
    />
    <RouteWithLayout
      component={MailVerification}
      exact
      layout={MinimalLayout}
      path="/emailVerification"
    />
    <RouteWithLayout
      component={SignUp}
      exact
      layout={MinimalLayout}
      path="/signUp"
    />
    <RouteWithLayout
      component={Dashboard}
      exact
      layout={MainLayout}
      path="/dashboard"
    />
    <RouteWithLayout
      component={Profile}
      exact
      layout={MainLayout}
      path="/profile"
    />
    <RouteWithLayout
      component={PreviewPartnership}
      exact
      layout={MainLayout}
      path="/previewPartnership"
    />
    <RouteWithLayout
      component={AccountSetup}
      exact
      layout={MainLayout}
      path="/accountSetup"
    />
    <RouteWithLayout
      component={SalesHub}
      exact
      layout={MainLayout}
      path="/salesHub"
    />
    <RouteWithLayout
      component={CreatePartnership}
      exact
      layout={MainLayout}
      path="/createPartnership"
    />
    <RouteWithLayout
      component={SolutionNarrative}
      exact
      layout={MainLayout}
      path="/solutionNarrative"
    />

    <RouteWithLayout
      component={UploadAssets}
      exact
      layout={MainLayout}
      path="/uploadAsset"
    />

    <RouteWithLayout
      component={SalesHubSite}
      exact
      layout={BlankLayout}
      path="/saleHubSite"
    />

    <RouteWithLayout
      component={PageNotFound}
      exact
      layout={BlankLayout}
      path="*"
    />

    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
