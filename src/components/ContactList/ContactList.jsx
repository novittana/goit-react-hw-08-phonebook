import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

function ContactList( ) {
 const filteredContacts = useSelector(getFilteredContacts);
  return (
    <div>
      {
        filteredContacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              {...contact}
            />
          );
        })}
    </div>
  );
}

export default ContactList;