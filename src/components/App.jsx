import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from 'redux/contactsSlice';

// const LS_KEY = 'reader_item';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const fromSubmitHandler = ({ name, number }) => {
    const todo = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContacts(todo));
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(todo =>
      todo.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // ругается на ловеркейс

  const deleteContact = e => {
    dispatch(deleteContacts(e));
  };

  // const full = getVisibleContacts()

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={fromSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        deleteContacts={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
}
