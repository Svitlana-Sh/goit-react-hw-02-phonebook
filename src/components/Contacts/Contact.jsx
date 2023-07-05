import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  handleDeleteContact = e => {
    this.props.onClick(this.props.contact.id);
  };
  render() {
    const { contact } = this.props;

    return (
      <>
        {`${contact.name}: ${contact.number}`}{' '}
        <buttom type="buttom" onClick={this.handleDeleteContact}>
          Delete
        </buttom>
      </>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};