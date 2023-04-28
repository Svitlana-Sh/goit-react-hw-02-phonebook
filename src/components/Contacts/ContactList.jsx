import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contacts/';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};