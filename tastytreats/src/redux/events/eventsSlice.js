import { createSlice } from '@reduxjs/toolkit';
import { findMasterClasses } from '../operations';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(findMasterClasses.pending, state => {
        state.isLoading = true;
      })
      .addCase(findMasterClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(findMasterClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
