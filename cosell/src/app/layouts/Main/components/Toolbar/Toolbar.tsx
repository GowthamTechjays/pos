/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Menu, MenuItem } from '@material-ui/core';
import styles from './Toolbar.module.css';
import { postRequest } from '../../../../service';
import profile from '../../../../assets/profile.png';

export default function Toolbar(props: any) {
  const { handleSelectMenu, userData } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem('token');
  const history = useHistory();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (menu: string) => {
    setAnchorEl(null);
    handleSelectMenu(menu);
  };

  const handleUserSignOut = () => {
    postRequest(
      `users/logout/`,
      {},
      {
        Authorization: `Token ${token}`,
      }
    ).then((resp: any) => {
      if (resp.result === true) {
        localStorage.clear();
        history.push('/');
      }
    });
  };
  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.inputWrap}>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Search.."
              className={styles.searchbar}
            />
          </form>
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.userWrap}>
          <div className={styles.userName}>{userData}</div>
          <img src={profile} alt="Paris" onClickCapture={handleClick} />
        </div>
      </div>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose('')}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className={styles.userMenu}
      >
        <MenuItem onClick={() => handleClose('myAcc')}>My Account</MenuItem>
        <MenuItem onClick={() => handleUserSignOut()}>Logout</MenuItem>
      </Menu>
    </>
  );
}
