import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

export class ContactForm extends Component {
  initialValues = { name: '', number: '' };
  schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('It is required'),
    number: yup
      .number()
      .required('It is required')
      .positive()
      .integer()
      .typeError(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      ),
  });

  handleSubmit = (values, { resetForm }) => {
    const { onSubmit, onCheck } = this.props;
    const isContactsInclude = onCheck(values.name);

    if (isContactsInclude) {
      alert(`${values.name} is alredy in contacts.`);
      return;
    }

    onSubmit(values);
    resetForm();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    // const { name, number } = this.state;

    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.schema}
        onSubmit={this.handleSubmit}
      >
        <div>
          <label>
            Name
            <input type="text" name="name" />
            <ErrorMessage name="name" />
          </label>
          <label>
            Number
            <input type="tel" name="number" />
            <ErrorMessage name="number"/>
          </label>

          <button type="submit">Add contact</button>
        </div>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};