import PropTypes from 'prop-types';
import css from '../Contact/Contact.module.css'

const Contact = ({ id, name, number, deleteContact = () => {} }) => {
  return (
    <div className={css.contact_wrap}>
      <span className={css.contact_info}>
        {name}: {number}
      </span>
      <button className={css.delete_button} onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};

export default Contact;
