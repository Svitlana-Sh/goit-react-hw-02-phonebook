import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contacts/';
import { FilterList } from './Contacts-styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <FilterList>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </FilterList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};