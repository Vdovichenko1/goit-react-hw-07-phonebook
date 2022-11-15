import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// export const persistor = persistStore(store);
