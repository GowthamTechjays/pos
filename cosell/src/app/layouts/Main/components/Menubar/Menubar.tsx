/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useHistory, useLocation } from 'react-router-dom';
import SnackbarAlert from 'src/app/components/Snackbar/Snackbar';
import SecondaryButton from 'src/app/components/Button/SecondaryButton';
import PrimaryButton from 'src/app/components/Button/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from 'src/app/components/SideBar';
import { Dropdownlist } from './Dropdownlist';

// svg
import styles from './Menubar.module.css';
import accountSvg from '../../../../assets/Icons/Icons/SVG/Accounts_opportunities.svg';
import CampaignsSvg from '../../../../assets/Icons/Icons/SVG/Campaigns.svg';
import ContentSvg from '../../../../assets/Icons/Icons/SVG/Content.svg';
import SalesEnablementSvg from '../../../../assets/Icons/Icons/SVG/Sales_enablement.svg';
import ReportSvg from '../../../../assets/Icons/Icons/SVG/Report.svg';
import SetupSvg from '../../../../assets/Icons/Icons/SVG/Setup.svg';
import DownArrow from '../../../../assets/DownArrow.svg';
import setUpDone from '../../../../assets/setup_done.svg';

// string
import { Sidebar, MenuBarLabels } from '../../../../../strings';

// services
import { getRequest, deleteRequest } from '../../../../service/index';
import {
  selectCreatePartnershipResponse,
  PartnershipInfoAction,
} from '../../../../views/CreatePartnership/CreatePartnerShipSlice';

interface partnership {
  partnership_name: string;
  partnership_id: number;
  content_hub_subdomain_name: string;
}

export default function Menubar() {
  // const queryparams = new URLSearchParams(window.location.search);
  // const partnershipId: string = queryparams.get('partner_ship_id') || '0';
  // console.log(partnershipId);

  const pages = [
    {
      title: Sidebar.content,
      href: '/not-found',
      icon: ContentSvg,
    },
    {
      title: Sidebar.sales,
      href: '/not-found',
      icon: SalesEnablementSvg,
    },
    {
      title: Sidebar.setup,
      href: '/accountSetup',
      icon: SetupSvg,
    },
  ];
  const pagesContent = [
    {
      title: Sidebar.content,
      href: '/not-found',
      icon: ContentSvg,
    },
    {
      title: Sidebar.assets,
      href: ``,
      icon: '',
    },
    {
      title: Sidebar.solutionNarrative,
      href: '/solutionNarrative',
      icon: '',
    },
    {
      title: Sidebar.sales,
      href: '/not-found',
      icon: SalesEnablementSvg,
    },
    {
      title: Sidebar.setup,
      href: '/accountSetup',
      icon: SetupSvg,
    },
  ];
  const pagesSales = [
    {
      title: Sidebar.content,
      href: '/not-found',
      icon: ContentSvg,
    },
    {
      title: Sidebar.sales,
      href: '/not-found',
      icon: SalesEnablementSvg,
    },
    {
      title: Sidebar.salesHub,
      href: '/salesHub',
      icon: '',
    },
    {
      title: Sidebar.salesContact,
      href: '/salesContact',
      icon: '',
    },
    {
      title: Sidebar.setup,
      href: '/accountSetup',
      icon: SetupSvg,
    },
  ];
  const history = useHistory();
  const partnershipResponseData = useSelector(selectCreatePartnershipResponse);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [partnerships, setPartnerships] = useState<partnership[]>();
  const [partnerId, setpartnerId] = useState(0);
  const [isDropDownActive, setDropDownActive] = React.useState(true);
  const [isModalActive, setModalActive] = React.useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [partnershipName, setPartnershipName] = useState('');
  const [contentSelected, setContentSelected] = useState(false);
  const [salesSelected, setSalesSelected] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(pages);
  const [partnershipId, setPartnershipId] = useState('');
  const [uploadAsset, setUploadAsset] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipId(partnershipID);
    console.log(partnershipID);
    const id: number = +partnershipID;
    getPartnerships();
    getPartnershipById(id);
  }, [location, partnershipResponseData.refreshTimeStamp]);

  useEffect(() => {
    const queryparams = new URLSearchParams(window.location.search);
    const partnershipID: string = queryparams.get('partner_ship_id') || '0';
    setPartnershipId(partnershipID);
    const id: number = +partnershipID;
    getPartnershipById(id);
  }, []);

  const ToggleClass = () => {
    setDropDownActive(!isDropDownActive);
  };
  const modalClick = () => {
    setModalActive(false);
  };
  const openModal = (id: any) => {
    setModalActive(true);
    setpartnerId(id);
  };
  console.log(uploadAsset, 'uploadAsset');
  const handleListItemClick = (index: number, href: string, title: string) => {
    if (title === Sidebar.content) {
      setContentSelected(!contentSelected);
      setSidebarContent(contentSelected ? pages : pagesContent);
    } else if (title === Sidebar.sales) {
      setSalesSelected(!salesSelected);
      setSidebarContent(salesSelected ? pages : pagesSales);
    } else {
      setSelectedIndex(index);
      if (title === Sidebar.assets && uploadAsset) {
        history.push(`/uploadAsset?partner_ship_id=${partnershipId}`);
      } else if (title === Sidebar.setup) {
        history.push(`/accountSetup?partner_ship_id=${partnershipId}`);
      } else if (title === Sidebar.solutionNarrative && uploadAsset) {
        history.push(`/solutionNarrative?partner_ship_id=${partnershipId}`);
      }
    }
  };

  const getPartnerships = () => {
    const token = localStorage.getItem('token');
    const headerData = {
      Authorization: `Token ${token}`,
    };
    getRequest('partnership/?', headerData).then((resp: any) => {
      if (resp) {
        const resData = resp.data;
        setPartnerships(resData);
      }
    });
  };

  const getPartnershipById = (partnershipId: number) => {
    const token = localStorage.getItem('token');
    getRequest(`partnership/?partnership_id=${partnershipId}`, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    }).then((resp: any) => {
      if (resp.result === true) {
        setPartnershipName(resp.data.partnership_name);
        if (
          resp.data.partner_company_information === null ||
          resp.data.company_information === null
        ) {
          setUploadAsset(false);
        } else {
          setUploadAsset(true);
        }
      } else {
        setPartnershipName('Create partnership');
        setUploadAsset(false);
      }
    });
  };
  const deletePartnerShip = () => {
    const token = localStorage.getItem('token');
    const headerData = {
      Authorization: `Token ${token}`,
    };
    deleteRequest(`partnership/${partnerId}`, headerData).then((resp: any) => {
      if (resp) {
        if (resp.result === true) {
          getPartnerships();
          setModalActive(false);
          setShowAlert(true);
        }
      }
    });
  };

  const editPartnership = (id: number) => {
    getPartnershipById(id);
    history.push(`/previewPartnership?partner_ship_id=${id}`);
    setDropDownActive(!isDropDownActive);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div className={isModalActive ? styles.modalActive : styles.modal}>
        <div className={styles.modalcontent}>
          <p className={styles.modalcontenttitle}>
            {MenuBarLabels.deletePartnership}
          </p>
          <p className={styles.modalSecContenttitle}>
            {' '}
            {MenuBarLabels.confirmDelete}
          </p>
          <SecondaryButton
            onClick={modalClick}
            style={{ minWidth: '160px', marginRight: '10px' }}
          >
            {MenuBarLabels.cancelButton}
          </SecondaryButton>
          <PrimaryButton
            onClick={deletePartnerShip}
            style={{ minWidth: '160px' }}
          >
            {MenuBarLabels.deleteButton}
          </PrimaryButton>
        </div>
      </div>

      <div className={styles.dropdown}>
        <button className={styles.dropdownBtn} onClick={ToggleClass}>
          {' '}
          {partnershipName}
          <KeyboardArrowDownIcon
            className={`${styles.arrowIcon}  ${
              isDropDownActive ? styles.arrowIconActive : ''
            }`}
          />
        </button>
        <div
          className={
            isDropDownActive ? styles.dropdownMenu : styles.dropdownMenuActive
          }
        >
          {partnerships && (
            <Dropdownlist
              partnerships={partnerships}
              handleClick={function (id: any): void {
                openModal(id);
              }}
              editPartnership={editPartnership}
            />
          )}
        </div>
      </div>

      <List
        className={styles.list}
        component="nav"
        aria-label="secondary mailbox folder"
      >
        {sidebarContent.map((page, index) => (
          <ListItemButton
            key={page.title}
            selected={selectedIndex === index}
            onClick={(event) =>
              handleListItemClick(index, page.href, page.title)
            }
          >
            <ListItemIcon className={styles.icon}>
              {window.location.pathname.includes('accountSetup') &&
              page.title === 'Setup' ? (
                <img src={setUpDone} alt="setup" />
              ) : (
                <img src={page.icon} alt="" />
              )}
            </ListItemIcon>
            <ListItemText
              className={
                (window.location.pathname.includes('accountSetup') &&
                  page.title === 'Setup') ||
                (window.location.pathname.includes('uploadAsset') &&
                  page.title === 'Assets') ||
                (window.location.pathname.includes('solutionNarrative') &&
                  page.title === 'Solution narrative') ||
                (window.location.pathname.includes('salesHub') &&
                  page.title === 'Sales hub') ||
                (window.location.pathname.includes('salesContact') &&
                  page.title === 'Sales contacts')
                  ? styles.clicked
                  : styles.icon
              }
            >
              {page.title === Sidebar.assets ||
              page.title === Sidebar.solutionNarrative ||
              page.title === Sidebar.salesHub ||
              page.title === Sidebar.salesContact ? (
                <span className={styles.title}>
                  &bull;&nbsp; &nbsp;{page.title}
                </span>
              ) : page.title === Sidebar.content ||
                page.title === Sidebar.sales ? (
                <span className={styles.title}>
                  {page.title}
                  <img className={styles.arrow} src={DownArrow} />
                </span>
              ) : (
                <span className={styles.title}>{page.title} </span>
              )}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>

      {showAlert && (
        <SnackbarAlert
          severity="success"
          handler={() => setShowAlert(false)}
          showalert={showAlert}
          message={MenuBarLabels.snackbarMsg}
        />
      )}
    </Box>
  );
}
