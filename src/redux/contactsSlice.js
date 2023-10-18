import {
  fetchContacts,
  addContact,
  deleteContact,
  logOut,
  editContact,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ContactsSlice = createSlice({
  name: `contacts`,
  initialState: {
    contactItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(editContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactItems = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactItems.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactItems.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactItems.splice(index, 1);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactItems = [];
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactItems.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactItems[index] = action.payload;
      }),
});

export const сontactsReducer = ContactsSlice.reducer;
