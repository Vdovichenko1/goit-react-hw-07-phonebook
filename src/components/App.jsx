import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsApi';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { BounceLoader } from 'react-spinners';


export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts {isLoading && !error && <BounceLoader color="#4c4ad9" size={30} cssOverride = { {display: 'block', marginLeft: 'auto', marginRight: 'auto'} } />}</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </>
  );
}
