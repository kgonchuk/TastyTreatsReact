import { createSlice } from '@reduxjs/toolkit';
import { getPopularRecipes } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const popularRecipesSlice = createSlice({
  name: 'popularRecipes',
  initialState,
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
        state.error = action.payload || 'Не вдалося завантажити популярні рецепти';
      });
  },
});

// export const popularRecipesReducer = popularRecipesSlice.reducer;
export default popularRecipesSlice.reducer;