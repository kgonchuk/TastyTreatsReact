// src/redux/popularRecipes/popularRecipesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getPopularRecipes } from '../operations';

const popularRecipesSlice = createSlice({
  name: 'popularRecipes',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPopularRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getPopularRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default popularRecipesSlice.reducer;
