/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Select, { components } from 'react-select';
import IconCheck from '../assets/sign-up/icon-check.svg';
import ArrowDown from '../assets/sign-up/icon-arrow-down.svg';

const handleSubmit = (e) => {
  e.preventDefault();

  console.log('Button clicked');
};

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

const options = [
  {
    value: 'Basic Pack',
    label: 'Basic Pack',
    price: 'Free',
  },
  {
    value: 'Pro Pack',
    label: 'Pro Pack',
    price: '$9.99',
  },
  {
    value: 'Ultimate Pack',
    label: 'Ultimate Pack',
    price: '$19.99',
  },
];

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
  option: (provided, { data, isDisabled, isFocused }) => ({
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
  singleValue: (provided, state) => ({
    ...provided,
    color: '#333950',
    fontWeight: 'bold',
    fontSize: '16px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#333950',
    fontWeight: 'bold',
    fontSize: '16px',
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '.5rem 2rem',
    marginTop: '1rem',
  }),
};

const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="name">
        Name
      </label>
      <input type="text" id="name" name="name" placeholder="Name" />
      <label className="visually-hidden" htmlFor="email">
        Email Address
      </label>
      <input type="email" id="email" name="email" placeholder="Email Address" />

      <label className="visually-hidden" htmlFor="price-packages">
        Price Packages
      </label>
      <Select
        id="price-packages"
        components={{
          Option: customOption,
          DropdownIndicator: customDropdownIndicator,
        }}
        classNamePrefix="react-select"
        options={options}
        formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        defaultValue={options[0]}
        name="Price Packages"
        isSearchable={false}
      />

      <label className="visually-hidden" htmlFor="phone">
        Phone Number
      </label>
      <input type="text" id="phone" name="phone" placeholder="Phone Number" />

      <label className="visually-hidden" htmlFor="company">
        Company
      </label>
      <input type="text" id="company" name="company" placeholder="Company" />
      <button type="submit" className="btn btn--primary">
        Get on the list
      </button>
    </form>
  </>
);

export default Form;
