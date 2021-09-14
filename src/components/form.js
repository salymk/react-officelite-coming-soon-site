/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cross from '../assets/sign-up/icon-cross.svg';
import SelectField from './SelectField';

// react-select options array
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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email is required!'),
  // package: Yup.string().required('Select a package'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is invalid!'),
  company: Yup.string(),
});

const SignupForm = () => (
  <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        company: '',
        package: 'Basic Pack',
      }}
      onSubmit={(values, onSubmitProps) => {
        alert(JSON.stringify(values, null, 2));
        onSubmitProps.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        {/* Name input */}
        <Field name="name">
          {({ field, form, meta }) => (
            <div className="input-container">
              <label className="visually-hidden" htmlFor="name">
                Name
              </label>
              {form.errors.name ? (
                <img className="error-cross" src={Cross} alt="" />
              ) : null}
              <input
                type="text"
                placeholder="Name"
                id="name"
                className={form.errors.name ? 'error' : ''}
                {...field}
              />
              {form.errors.name ? (
                <span className="error-message">{form.errors.name}</span>
              ) : null}
            </div>
          )}
        </Field>

        {/* Email input */}
        <Field name="email">
          {({ field, form, meta }) => (
            <div className="input-container">
              <label className="visually-hidden" htmlFor="email">
                Email Address
              </label>
              {form.errors.email ? (
                <img className="error-cross" src={Cross} alt="" />
              ) : null}
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                className={form.errors.email ? 'error' : ''}
                {...field}
              />
              {form.errors.email ? (
                <span className="error-message">{form.errors.email}</span>
              ) : null}
            </div>
          )}
        </Field>

        {/* Select packages */}
        <label className="visually-hidden" htmlFor="package">
          Price Packages
        </label>
        <Field
          component={SelectField}
          name="package"
          defaultValue={options[0]}
          options={options}
        />

        {/* Phone input */}
        <Field name="phone">
          {({ field, form, meta }) => (
            <div className="input-container">
              <label className="visually-hidden" htmlFor="phone">
                Phone
              </label>
              {form.errors.phone ? (
                <img className="error-cross" src={Cross} alt="" />
              ) : null}
              <input
                type="tel"
                placeholder="Phone"
                id="phone"
                className={form.errors.phone ? 'error' : ''}
                {...field}
              />
              {form.errors.phone ? (
                <span className="error-message">{form.errors.phone}</span>
              ) : null}
            </div>
          )}
        </Field>

        {/* Company input */}
        <Field name="company">
          {({ field, form, meta }) => (
            <div className="input-container">
              <label className="visually-hidden" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                placeholder="Company"
                id="company"
                {...field}
              />
            </div>
          )}
        </Field>

        <button type="submit" className="btn btn--primary">
          Get on the list
        </button>
      </Form>
    </Formik>
  </>
);

export default SignupForm;
