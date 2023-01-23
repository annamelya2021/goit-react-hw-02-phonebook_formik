// import { Component } from 'react';
import shortid from 'shortid';
import * as yup from 'yup';

// import { Input, Form, Button, Label } from './ContactForm.styled';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(16).required(),
});
const initialValues = {
  login: '',
  password: '',
};

const ContactForm = ({ onSubmit }) => {
  const id = shortid.generate();

  const addContact = (values, { resetForm }) => {
    onSubmit({ id, ...values });
    resetForm();
  };
  // static propTypes = { submit: PropTypes.func.isRequired };

  // state = { id: '', name: '', number: '' };

  // onHandleImputChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  //   this.setState({ id: shortid.generate() });
  // };

  // onHandleSubmit = e => {
  //   e.preventDefault();
  //   this.props.submit(this.state);
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ id: '', name: '', number: '' });
  // };
  // const LoginForm = (values, { resetForm }) => {
  //   handleSubmit(id, ...values);
  //   console.log(values);
  //   // console.log(actions);
  //   resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={addContact}
    >
      <Form autoComplete="off">
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number:
          <Field type="tel" name="number" />
          <ErrorMessage name="name" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
