/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Select from 'react-select';

const options = [
  {
    value: `Basic Pack <span>Free</span>`,
    label: 'Basic Pack Free',
  },
  {
    value: 'Pro Pack $9.99',
    label: 'Pro Pack $9.99',
  },
  {
    value: 'Ultimate Pack $19.99',
    label: 'Ultimate Pack $19.99',
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
  }),
  dropdownIndicator: (provided, state) => ({
    color: 'red',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: `1px solid rgba(116,123,149, .25)`,
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
    color: state.isSelected ? 'red' : '#333950',
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
    padding: '0 1rem',
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
        classNamePrefix="react-select"
        options={options}
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
