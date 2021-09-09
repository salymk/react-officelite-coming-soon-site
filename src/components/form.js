/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Select, { components } from 'react-select';
import IconCheck from '../assets/sign-up/icon-check.svg';

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
const formatOptionLabel = ({ value, label, price }) => (
  <div style={{ display: 'flex' }}>
    <div>{label}</div>
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
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderBottom: `1px solid rgba(116,123,149, .25)`,
    paddingBottom: '1rem',
    outline: 'none',
    focus: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
    '&:hover': {
      borderColor: 'none',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    color: 'red',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    // borderBottom: `1px solid rgba(116,123,149, .25)`,
    color: '#333950',
    fontWeight: 'bold',
    fontSize: '16px',
    backgroundColor: 'white',
    paddingLeft: '0',
    padding: '1rem 0',
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
    <form>
      <label className="visually-hidden" htmlFor="name">
        Name
      </label>
      <input type="text" id="name" name="name" placeholder="Name" />
      <label className="visually-hidden" htmlFor="email">
        Email Address
      </label>
      <input type="email" id="email" name="email" placeholder="Email Address" />

      <label className="visually-hidden" htmlFor="packages">
        Packages
      </label>
      <Select
        components={{ Option: customOption }}
        classNamePrefix="react-select"
        options={options}
        formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        // placeholder="Basic Pack Free"
        defaultValue={options[0]}
        name
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
