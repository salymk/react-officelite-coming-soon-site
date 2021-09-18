# Frontend Mentor - Officelite coming soon site solution

![Design preview for the Officelite coming soon site coding challenge](./preview.jpg)

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was to build out this 2-page coming soon website and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [react-officelite-coming-soon-site.vercel.app/](https://react-officelite-coming-soon-site.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - A router for react
- [Formik](https://formik.org/) - To handle form submissions
- [react-select](https://www.npmjs.com/package/react-select) - To build a custom select component
- [react-countdown](https://www.npmjs.com/package/react-countdown) - A customizable countdown component for React
- [luxon](https://moment.github.io/luxon/#/) - Luxon is a library for dealing with dates and times in JavaScript

### What I learned

I learned a bunch of new things while working on this project, things like code splitting, routing with react-router, using react-select to create a custom select component, I went a little deeper into formik and used some of there compoenents for my form and also by combining react-clock and luxon I was able to create a custom countdown timer.

#### Formik

Lets start off by talking about formik, formik helps you with the three most difficult parts of building forms in reactjs:

1. Getting values in and out of form state
2. Validation and error messages
3. Handling form submissions

I'll create a simple form that takes in a users name and email with formik's components and then we'll breakdown and talk about what each component does.

```js
  <Formik
    initialValues = {
      name: '',
      email: ''
    }
    onSubmit = {(values, submitProps) => {
      alert(JSON.stringify(values, null, 2));
      onSubmitProps.resetForm()
    }}
    validationSchema = {validationSchema}
  >
    <Form>
      <Field name="name">
        {({field, meta}) => {
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className={meta.touched && meta.error ? 'error' : ''}
            {...field}
          />
          {meta.touched && meta.error ? (
            <span aria-live="polite" className="error-message">
              {meta.error}
            </span>
          ) : null}
        }}
      </Field>

      <Field name="email">
        {({field, meta}) => {
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className={meta.touched && meta.error ? 'error' : ''}
            {...field}
          />
          {meta.touched && meta.error ? (
            <span aria-live="polite" className="error-message">
              {meta.error}
            </span>
          ) : null}
        }}
      </Field>

      <button type="submit">Get on the list</button>
    </Form>
  </Formik>
```

First you have the <Formik> component that wraps around your whole form. It takes three props initialValues, onSubmit and validationSchema.

The initialValues prop holds the initial field values of the form, which for us is name and email. This ones a little obviouse but the onSubmit prop is our submission handler. And we use the validationSchema prop to pass in our user input validtion schema, you can create a custom validator or you can use yup a JavaScript schema builder for value parsing and validation.

Next up is the <Form> component which is a small wrapper around an HTML form element which automatically hooks into Formiks handleSubmit and handleRest.

And finally we have the <Field> component, which does three things:

1. defaults to an HTML input element
2. automatically hook up inputs into Formik
3. use the name prop to match up with Formik state

There are a few different ways you can render things with <Field>, I ended up using the render props pattern, the render props are an object that contain:

field: An object containing onChange, onBlur, name, and value of the field
form: The Formik bag
meta: An object containing metadata (i.e. value, touched, error, and initialValue) about the field

Formik has great documentation, if you'd like to learn more about these components, take a look at their website: <https://formik.org>

#### react-select

And now lets take a look how I used react-select to create a custom select component...

### Continued development

### Useful resources

- [SCSS Boilerplate](https://github.com/KittyGiraudel/sass-boilerplate) - This helped me organize my styles into different sections and pages, moving forward when I work on bigger css heavy projects I will most definitly use this approach.

## Author

- Portfolio Site - [Salym Akhmedov](https://www.salymakhmedov.dev/)
- LinkedIn - [@salym-akhmedov](https://www.linkedin.com/in/salym-akhmedov/)
- Frontend Mentor - [@salymk](https://www.frontendmentor.io/profile/salymk)
