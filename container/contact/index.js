import React from 'react';
import { useFormik } from 'formik';
import Button from '../../components/Button';
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

  if (!values.tel) {
    errors.tel = 'Required';
  } else if (!/^[+]?[0-9]{3}[0-9]{3}[0-9]{4,6}$/i.test(values.tel)) {
    errors.tel = 'Invalid phone number';
  }

  return errors;
};

const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      message: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section id="contact">
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.contactContainer}>
          <h2 className={styles.captionCon}>Contact</h2>
          <p className={styles.desCon}>GET IN TOUCH</p>
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
                placeholder="Name"
                className={formik.errors.name ? styles.borderApply : styles.contactInput}
              />
              <input
                id="tel"
                name="tel"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tel}
                variant="contactInput"
                placeholder="Phone Number"
                className={formik.errors.tel ? styles.borderApply : styles.contactInput}
              />
            </div>
            <textarea
              variant="contactTextArea"
              className={styles.contactTextArea}
              component="textarea"
              placeholder="How can we help you?"
            />
            <Button type="submit" className={styles.buttonMargin}>
              SEND MESSAGE
            </Button>
          </div>
        </div>
      </form>
      <div className={styles.footerLine} />
    </section>
  );
};

export default SignupForm;
