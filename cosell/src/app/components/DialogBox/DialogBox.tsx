/* eslint-disable linebreak-style */
import Dialog from '@mui/material/Dialog';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';
import './DialogBox.css';

export default function DialogBoxComponent(props: any) {
  const {
    title,
    primaryContent,
    secondaryContent,
    secondaryButton,
    primaryButton,
    handleDialogBoxClose,
    handleAgree,
    show,
  } = props;
  console.log(show);

  return (
    <div>
      <Dialog open={show} onClose={handleDialogBoxClose}>
        {title !== '' && (
          <div className="dialogbox_title_container">
            <div className="dialogbox_title">{title}</div>
          </div>
        )}
        <div className="dialogbox_content_container">
          <div className="dialogbox_content_div">
            <div className="dialogbox_primary_content">{primaryContent}</div>
          </div>
          <div className="dialogbox_content_div">
            <div className="dialogbox_secondary_content">
              {secondaryContent}
            </div>
          </div>
        </div>
        <div className="dialogbox_button_container">
          <SecondaryButton
            style={{ marginRight: '20px' }}
            onClick={handleDialogBoxClose}
          >
            {secondaryButton}
          </SecondaryButton>
          <PrimaryButton onClick={handleAgree} autoFocus>
            {primaryButton}
          </PrimaryButton>
        </div>
      </Dialog>
    </div>
  );
}
