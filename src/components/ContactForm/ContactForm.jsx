import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormGeneral,
  LabelForm,
  InputForm,
  BtnAddContact,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsApi';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();
  

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = contacts.find(
        e => e.name.toLowerCase() === name.toLowerCase()
      );
    contact
      ? toast.error(`${contact.name} is already in contacts`)
        : dispatch(addContact({ name, number }))
    setName('');
    setNumber('');
  };

  return (
    <FormGeneral onSubmit={handleSubmit}>
      <LabelForm>Name</LabelForm>
      <InputForm
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nanoid()}
        value={name}
        onChange={handleChangeName}
      />
      <LabelForm>Number</LabelForm>
      <InputForm
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={nanoid()}
        value={number}
        onChange={handleChangeNumber}
      />
      <BtnAddContact type="submit">Add contact</BtnAddContact>
    </FormGeneral>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
