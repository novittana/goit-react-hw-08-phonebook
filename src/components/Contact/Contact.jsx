import css from './Contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import Button from '@mui/material/Button';

const Contact = ({ id, name, number,}) => {
 
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_wrap}>
      <span className={css.contact_info}>
        {name}: {number}
      </span>
      <Button
        className={css.delete_button}
        onClick={() => handleDelete(id)}
        type="button"
      >
        Delete
      </Button>
    </div>
  );
};

export default Contact;
