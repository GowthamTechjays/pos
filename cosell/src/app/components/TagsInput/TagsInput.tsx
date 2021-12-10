/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import {
  TextField,
  TextFieldProps,
  OutlinedInputProps,
  OutlinedTextFieldProps,
} from '@material-ui/core';
import Downshift from 'downshift';
import styles from './TagsInput.module.css';

export default function TagsInput({ ...props }) {
  const { selectedTags, placeholder, tags, selectedChip, error, ...other } =
    props;
  const selectedChips = selectedChip || [];
  const [inputValue, setInputValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState(selectedChips);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputValue('');
        return;
      }
      if (!event.target.value.replace(/\s/g, '').length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue('');
    }
    if (
      selectedItem.length &&
      !inputValue.length &&
      event.key === 'Backspace'
    ) {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  };
  const handleChange = (item: any) => {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  };

  const handleDelete = (item: any) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
          });
          const customInputProps: any = { ...inputProps };
          return (
            <div>
              <TextField
                className={styles.chipWrap}
                style={{ flexWrap: 'wrap', paddingLeft: 0 }}
                data-value={selectedItem}
                variant="outlined"
                InputProps={{
                  startAdornment: selectedItem.map((item: string) => (
                    <Chip
                      key={item}
                      tabIndex={-1}
                      label={item}
                      className={styles.chip}
                      variant="outlined"
                      onDelete={handleDelete(item)}
                    />
                  )),
                  onBlur,
                  onChange: (event) => {
                    handleInputChange(event);
                    // onChange(event);
                  },
                  onFocus,
                  inputProps: customInputProps,
                }}
                {...other}
              />
            </div>
          );
        }}
      </Downshift>
    </>
  );
}
TagsInput.defaultProps = {
  tags: [],
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
