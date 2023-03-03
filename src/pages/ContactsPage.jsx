import { ContactForm } from '../components/ContactForm/ContactForm'
import ContactList from '../components/ContactList/ContactList';
import Contact from '../components/Contact/Contact';
import { Filter } from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsloading } from 'redux/selectors';
import css from './ContactsPage.module.css'

export function ContactsPage() {
  const dispatch = useDispatch();
   const isLoading = useSelector(getIsloading);

   useEffect(() => {
     dispatch(getContacts());
   }, [dispatch]);

  return (
    <div className={css.contacts_wrap}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList>
        <Contact />
      </ContactList>
    </div>
  );
}