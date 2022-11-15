import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts(state, { payload }) {
      const nameFind = state.contacts.find(
        e => e.name.toLowerCase() === payload.name.toLowerCase()
      );
      nameFind
        ? toast.error(`${state.contacts.name} is already in contacts`)
        : state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(todo => todo.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

console.log(contactsSlice.actions.addContacts(10));

// Експортуємо генератори екшенів та редюсер
export const { addContacts, deleteContacts, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
