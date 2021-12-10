/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import SideBar from '../../components/SideBar';
import { Menubar, Toolbar } from './components';
import MyAccount from './components/MyAccount';
import { getRequest } from '../../service';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    background: '#E5E5E5',
  },
  content: {
    marginTop: '80px',
    background: '#E5E5E5',
  },
  container: {
    width: '80%',
  },
  sibebar: {
    width: '20%',
    background: '#E5E5E5',
    minHeight: '100vh',
    // margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

const Main = (props: any) => {
  const { children } = props;
  const classes = useStyles();
  const [activeMenu, setActiveMenu] = React.useState('');
  const [userData, setUserData] = React.useState('');

  let renderElement = <></>;
  let title = '';
  switch (activeMenu) {
    case 'myAcc': {
      title = 'My Account';
      renderElement = <MyAccount cancelHandler={() => setActiveMenu('')} />;
      break;
    }
    default:
      break;
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const headerData = {
      Authorization: `Token ${token}`,
    };
    getRequest(`users/my-account/`, headerData).then((resp: any) => {
      if (resp.result === true) {
        setUserData(resp.data.first_name);
      }
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.sibebar}>
        <Menubar />
      </div>
      <div className={classes.container}>
        <Toolbar handleSelectMenu={setActiveMenu} userData={userData} />
        <main className={classes.content}>{children}</main>
      </div>
      {activeMenu !== '' && (
        <SideBar
          title={title}
          closeHandler={() => setActiveMenu('')}
          renderElement={renderElement}
        />
      )}
    </div>
  );
};

Main.propTypes = {
  // children: PropTypes.node,
};

export default Main;
