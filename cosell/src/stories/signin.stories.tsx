/* eslint-disable linebreak-style */
import React from 'react';

import { Provider } from 'react-redux';
import SignIn from '../app/views/SignIn/SignIn';
import store from '../app/store/index';
import Banner from '../app/layouts/Minimal/components/Banner/Banner';

export default {
  title: 'SignIn',
  component: SignIn,
  decorators: [
    (Story: any) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = () => (
  <div style={{ width: '100%', display: 'flex' }}>
    <div style={{ width: '50%' }}>
      <Banner />
    </div>
    <div style={{ width: '50%' }}>
      <SignIn />
    </div>
  </div>
);

export const Signin = Template.bind({});
