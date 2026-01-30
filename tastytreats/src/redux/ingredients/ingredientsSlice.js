import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredientsRecipes } from '../operations';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIngredientsRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngredientsRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchIngredientsRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ingredientsSlice.reducer;
