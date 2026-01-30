import { createSlice } from '@reduxjs/toolkit';
import { fetchAreaRecipes } from '../operations';

const areasSlice = createSlice({
  name: 'areas',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAreaRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAreaRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAreaRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default areasSlice.reducer;
