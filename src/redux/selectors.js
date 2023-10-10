import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactItems;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectIsLoggedIn = state => state.uath.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);