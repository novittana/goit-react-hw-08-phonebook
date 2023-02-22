import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Contact from './Contact/Contact';
import { Filter } from './Filter/Filter';
import storage from './helpers/storage';

export function App () {

  const [contacts, setContacts] = useState(()=>storage.load('contacts-list') ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save('contacts-list', contacts);
  }, [contacts]);
  
const addContact = contact => {
  const isExist = contacts.some(cont => cont.name.toLowerCase() === contact.name.toLowerCase());
  console.log(isExist);
  if (isExist){
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const finalContact = {
      id: nanoid(5),
      ...contact,
    };
    setContacts(prevState => [finalContact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilter = event => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilter} />
      <ContactList deleteContact={deleteContact} contacts={filteredContacts}>
        <Contact />
      </ContactList>
    </div>
  );
  }

  
