/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getRequest } from 'src/app/service';
import addPartnership from '../../assets/carbon_add-alt.svg';
import cloudUpload from '../../assets/bi_cloud-upload.svg';
import createIcon from '../../assets/gridicons_create.svg';
import settingsIcon from '../../assets/settings.svg';
import campaignsIcon from '../../assets/Campaigns.svg';
import targetIcon from '../../assets/target.svg';
import tickIcon from '../../assets/green_tick.svg';
import { AccountSetupLabels } from '../../../strings';
import './accountSetup.css';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Loader from 'src/app/components/Loader';

const AccountSetup = () => {
  const accountSetupContents = [
    {
      icon: addPartnership,
      title: AccountSetupLabels.addPartnership,
      description: AccountSetupLabels.addPartnershipDescription,
      buttonLabel: AccountSetupLabels.addPartnershipButtonLabel,
    },
    {
      icon: cloudUpload,
      title: AccountSetupLabels.uploadAssets,
      description: AccountSetupLabels.uploadAssetsDescription,
      buttonLabel: AccountSetupLabels.uploadAssetsButtonLabel,
    },
    {
      icon: createIcon,
      title: AccountSetupLabels.createSolutionNarrative,
      description: AccountSetupLabels.createSolutionNarrativeDescription,
      buttonLabel: AccountSetupLabels.createSolutionNarrativeButtonLabel,
    },
    {
      icon: settingsIcon,
      title: AccountSetupLabels.configureSalesHub,
      description: AccountSetupLabels.configureSalesHubDescription,
      buttonLabel: AccountSetupLabels.configureSalesHubButtonLabel,
    },
    {
      icon: campaignsIcon,
      title: AccountSetupLabels.createABMCampaign,
      description: AccountSetupLabels.createABMCampaignDescription,
      buttonLabel: AccountSetupLabels.createABMCampaignButtonLabel,
    },
    {
      icon: targetIcon,
      title: AccountSetupLabels.accountTarget,
      description: AccountSetupLabels.accountTargetDescription,
      buttonLabel: AccountSetupLabels.accountTargetButtonLabel,
    },
  ];

  const history = useHistory();
  const queryparams = new URLSearchParams(window.location.search);
  const partnershipId: string = queryparams.get('partner_ship_id') || '0';
  const [activeStep, setActiveStep] = useState('Create partnership');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const isUploadEnabled = queryparams.get('uploadAsset') || 'false';
    const token = localStorage.getItem('token');
    getRequest(`partnership/?partnership_id=${partnershipId}`, {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    }).then((resp: any) => {
      if (resp.result === true) {
        if (resp.data.is_sales_hub_available === true) {
          setActiveStep(AccountSetupLabels.createABMCampaignButtonLabel);
        } else if (resp.data.is_solution_narrative_available === true) {
          setActiveStep(AccountSetupLabels.configureSalesHubButtonLabel);
        } else if (resp.data.is_asset_available === true) {
          setActiveStep(AccountSetupLabels.createSolutionNarrativeButtonLabel);
        } else if (
          resp.data.partner_company_information !== null &&
          resp.data.company_information !== null
        ) {
          setActiveStep(AccountSetupLabels.uploadAssetsButtonLabel);
        }
      }
      setLoading(false);
    });
  }, []);
  const handleSetUpAccount = (stepName: string) => {
    switch (stepName) {
      case 'Create partnership':
        history.push('/createPartnership');
        break;
      case 'Upload assets':
        history.push(
          `/uploadAsset?partner_ship_id=${partnershipId}&assetModal=${true}`
        );
        break;
      case 'Create solution narrative':
        history.push(`/solutionNarrative?partner_ship_id=${partnershipId}`);
        break;
      case 'Create sales hub':
        history.push(`/salesHub?partner_ship_id=${partnershipId}`);
        break;
      default:
        return '';
    }
    return '';
  };

  return (
    <div className="account-setup-container">
      <div className="account-setup-header">
        {AccountSetupLabels.accountSetupHeader}
      </div>
      <div className="account-setup-subheader">
        {AccountSetupLabels.accountSetupSubHeader}
      </div>
      {accountSetupContents.map((accountSetupContent, index) => (
        <div
          className="account-setup-main-container"
          key={accountSetupContent.title}
        >
          <div className="account-setup-content-container">
            <div className="account-setup-content-info">
              <div className="account-setup-icon-container">
                <img
                  className="account-setup-icon"
                  src={accountSetupContent.icon}
                  alt=""
                />
              </div>
              <div>
                <div className="account-setup-content-title">
                  {accountSetupContent.title}
                </div>
                <div className="account-setup-content-description">
                  {accountSetupContent.description}
                </div>
              </div>
            </div>
            <div className="acccount-setup-content-button">
              {index <
              accountSetupContents.findIndex(
                (obj) => obj.buttonLabel === activeStep
              ) ? (
                <div className="completedSetup">
                  <img src={tickIcon} alt="" />
                </div>
              ) : (
                <PrimaryButton
                  style={{ minWidth: '180px' }}
                  disabled={accountSetupContent.buttonLabel !== activeStep}
                  onClick={() =>
                    handleSetUpAccount(accountSetupContent.buttonLabel)
                  }
                >
                  {' '}
                  {accountSetupContent.buttonLabel}
                </PrimaryButton>
              )}
            </div>
          </div>
        </div>
      ))}
      {loading && <Loader />}
    </div>
  );
};
AccountSetup.propTypes = {
  user: PropTypes.shape({}),
};

AccountSetup.defaultProps = {
  user: null,
};

export default AccountSetup;
