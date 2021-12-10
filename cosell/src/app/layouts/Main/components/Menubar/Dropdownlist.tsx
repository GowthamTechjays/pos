/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteSvg from '../../../../assets/Icons/Icons/SVG/fluent_delete.svg';
import EditSvg from '../../../../assets/Icons/Icons/SVG/fluent_edit.svg';
import styles from './Menubar.module.css';
import { MenuBarLabels } from '../../../../../strings';

interface partnership {
  partnership_name: string;
  partnership_id: number;
  content_hub_subdomain_name: string;
}

interface Props {
  partnerships: partnership[];
  handleClick: (id: number) => void;
  editPartnership: (id: number) => void;
}

export const Dropdownlist = ({
  partnerships,
  handleClick,
  editPartnership,
}: Props) => {
  const history = useHistory();

  return (
    <div className={styles.dropdownMenuActiveContainer}>
      {partnerships.map((list, index) => (
        <table key={`${index + 1}${list.partnership_name}`}>
          <tr>
            <td
              style={{ width: '70%', textAlign: 'left', paddingLeft: '10px' }}
              onClickCapture={() => editPartnership(list.partnership_id)}
            >
              {list.partnership_name}
            </td>
            <td
              style={{ width: '15%' }}
              onClickCapture={() => editPartnership(list.partnership_id)}
            >
              <img src={EditSvg} alt="edit" />
            </td>
            <td
              style={{ width: '15%' }}
              onClickCapture={() => {
                handleClick(list.partnership_id);
              }}
            >
              <img src={DeleteSvg} alt="delete" />
            </td>
          </tr>
        </table>
      ))}
      <Button className={styles.addBtn} href="/createPartnership">
        {MenuBarLabels.addPartnershipButton}
      </Button>
    </div>
  );
};
