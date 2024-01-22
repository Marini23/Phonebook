import axios from 'axios';
import { nanoid } from 'nanoid';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        id: nanoid(),
        ...newContact,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (newFormValues, thunkAPI) => {
    try {
      const contactId = newFormValues.id;

      const response = await axios.patch(`/contacts/${contactId}`, {
        name: newFormValues.name,
        number: newFormValues.number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/users/logout`);
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);

      const response = await axios.get(`/users/current`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
