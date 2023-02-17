import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Contact from './Contact/Contact'
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addContact = contact => {
    if (this.state.contacts.some(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    const finalContact = {
      id: nanoid(5),
      ...contact,
    };
    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilterChange={this.handleFilter} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filteredContacts}
        >
          <Contact />
        </ContactList>
      </div>
    );
  }
}