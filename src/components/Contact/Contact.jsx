import css from '../Contact/Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


const Contact = ({ id, name, number}) => {
 
  const dispatch = useDispatch();

  return (
    <div className={css.contact_wrap}>
      <span className={css.contact_info}>
        {name}: {number}
      </span>
      <button className={css.delete_button} onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
