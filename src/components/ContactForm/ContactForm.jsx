import { useState } from 'react';
import { nanoid } from "@reduxjs/toolkit";
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


export function ContactForm() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    if (inputName === 'name') {
      setName(inputValue);
    }
    if (inputName === 'number') {
      setNumber(inputValue);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log("hello");
    const isExist = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }
  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btn_add_contact} type="submit">
        Add contact
      </button>
    </form>
  );
}