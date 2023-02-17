import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number:''
   }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]:inputValue
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number:this.state.number
    };
    this.props.onAddContact(contact);

    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {

    return (
      <form className={css.contact_form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn_add_contact} type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact:PropTypes.func.isRequired
};