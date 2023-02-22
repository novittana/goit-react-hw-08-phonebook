import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';


export function ContactForm ({onAddContact}) {
 
  const[name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
  
    if (inputName === 'name') {
      setName(inputValue)
    }
    if (inputName === 'number') {
      setNumber(inputValue)
      }
  }

  
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number
    };

    onAddContact(contact);

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



  

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};