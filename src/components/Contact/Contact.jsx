import css from '../Contact/Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const Contact = ({ id, name, phone}) => {
 
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_wrap}>
      <span className={css.contact_info}>
        {name}: {phone}
      </span>
      <button
        className={css.delete_button}
        onClick={() => handleDelete(id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
