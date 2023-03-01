import { createSlice } from "@reduxjs/toolkit";
import { getContacts, deleteContact, addContact } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  
  extraReducers: {
    [getContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.items = [...payload].reverse();
      state.isLoading = false;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

 [deleteContact.fulfilled]: (state, { payload }) => {
          state.items = state.items.filter(item => item.id !== payload.id);
          state.isLoading = false;
    },
 
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    
      [addContact.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
      
        [addContact.fulfilled]: (state, { payload }) => {
          state.items = [payload, ...state.items];
          state.isLoading = false;
    },
        
        [addContact.rejected]: (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        },

  }
});


// reducers: {
//     addContact(state, { payload }) {
//       state.items = [...state.items, payload];
//     },
//     deleteContact(state, { payload }) {
//       state.items = [...state.items.filter(item => item.id !== payload)];
//     },
//   },

export const contactsReducer = contactsSlice.reducer;