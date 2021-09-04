/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

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
      <select id="packages" name="packages">
        <option value="basic pack">Basic Pack Free</option>
        <option value="pro pack">Pro Pack $9.99</option>
        <option value="ultimate pack">Ultimate Pack $19.99</option>
      </select>
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
