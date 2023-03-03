import {instance} from '../redux/user/operations'
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getContacts = createAsyncThunk(
  '/contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', { name, number });
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
      const response = await instance.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);