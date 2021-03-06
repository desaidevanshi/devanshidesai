/* eslint-disable react/prop-types */
import React from 'react';
import { useFormik } from 'formik';
import axios from '../../lib/axios';
import styles from './contact.module.scss';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line arrow-parens
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.mail) {
    errors.mail = 'Required';
  } else if (!/^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})$/.test(values.mail)) {
    errors.mail = 'Invalid E-mail';
  }

  return errors;
};

const SignupForm = ({ data }) => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      message: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (!values) {
        formik.errors.msg = 'This field is mandatory';
      }
      // eslint-disable-next-line no-alert
      resetForm();
      return axios({
        method: 'post',
        url: 'https://devanshi-portfolio-api.herokuapp.com/contact-forms',
        data: {
          name: values.name,
          mail: values.mail,
          message: values.message,
        },
      });
    },
  });
  return (
    <section id="contact" className={styles.container}>
      <form>
        <div className={styles.contactContainer}>
          <h2 className={styles.captionCon}>{data.header.title}</h2>
          <p className={styles.desCon}>{data.header.caption}</p>
          <div className={styles.contactIn}>
            <div className={styles.contactForm}>
              <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="contactInput"
                placeholder={data.name}
                className={formik.errors.name ? styles.borderApply : styles.contactInput}
              />
              <input
                id="mail"
                name="mail"
                type="mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mail}
                variant="contactInput"
                placeholder={data.mail}
                className={formik.errors.mail ? styles.borderApply : styles.contactInput}
              />
            </div>
            <textarea
              name="message"
              variant="contactTextArea"
              className={styles.contactTextArea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              component="textarea"
              placeholder={data.message}
            />
            <button type="submit" className={styles.buttonMargin} onClick={formik.handleSubmit}>
              {data.buttonText}
            </button>
          </div>
        </div>
      </form>
      {/* <div className={styles.footerLine} /> */}
    </section>
  );
};

export default SignupForm;
