import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { getIsloading } from 'redux/selectors';
import { Loader } from 'components/Loader';
import { getContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import {
  useEffect
} from 'react';
function ContactList() {
  const dispatch = useDispatch();
const isLoading = useSelector(getIsloading);
  const filteredContacts = useSelector(getFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <div>
        {filteredContacts.map(contact => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </div>
    </>
  );
}

export default ContactList;