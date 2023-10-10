import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
import { сontactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    contacts: сontactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
