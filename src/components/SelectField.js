/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Select, { components } from 'react-select';
import { useField } from 'formik';
import IconCheck from '../assets/sign-up/icon-check.svg';
import ArrowDown from '../assets/sign-up/icon-arrow-down.svg';

const customDropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <img className="arrow-down" src={ArrowDown} alt="" />
  </components.DropdownIndicator>
);

const customOption = (props) => (
  <div className="custom-option">
    <components.Option {...props} />

    {props.isSelected ? (
      <img className="custom-option__img" src={IconCheck} alt="" />
    ) : (
      ''
    )}
  </div>
);

// Format option to include a custom price text
const formatOptionLabel = ({ label, price, value }) => (
  <div style={{ display: 'flex' }}>
    <div value={value}>{label}</div>
    <div style={{ marginLeft: '10px', color: '#ccc' }}>{price}</div>
  </div>
);

// react-select custom styles
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid black' : 'none',
    borderBottom: state.isFocused
      ? '1px solid black'
      : '1px solid rgba(116,123,149, .25)',
    paddingBottom: '1rem',
    outlineColor: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: state.isFocused ? '3px' : 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'none',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotateX(180deg)' : null,
  }),
  option: (provided, { isDisabled, isFocused }) => ({
    ...provided,
    color: isDisabled ? '#333950' : isFocused ? '#5175FF' : '#333950',
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    paddingLeft: '0',
    padding: '1rem 0',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(116,123,149)',
    },
    '&:active': {
      backgroundColor: 'white',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333950',
    fontWeight: 'bold',
    fontSize: '16px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#333950',
    fontWeight: 'bold',
    fontSize: '16px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    padding: '.5rem 2rem',
    marginTop: '1rem',
  }),
};

const SelectField = (props) => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <Select
      {...props}
      components={{
        Option: customOption,
        DropdownIndicator: customDropdownIndicator,
      }}
      classNamePrefix="react-select"
      formatOptionLabel={formatOptionLabel}
      styles={customStyles}
      isSearchable={false}
      onChange={onChange}
      onBlur={setTouched}
    />
  );
};

export default SelectField;
