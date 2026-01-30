import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes, getPopularRecipes } from '../operations';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    popular: [],
    filters: {
      category: null,
      area: null,
      ingredient: null,
    },
    page: 1,
    totalPages: 1,
   isLoadingRecipes: false,
  isLoadingPopular: false,
    error: null,
  },

  reducers: {
    setCategory(state, action) {
      state.filters.category = action.payload;
      state.page = 1;
    },
    setArea(state, action) {
      state.filters.area = action.payload;
      state.page = 1;
    },
    setIngredient(state, action) {
      state.filters.ingredient = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetFilters(state) {
      state.filters = { category: null, area: null, ingredient: null };
      state.page = 1;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getPopularRecipes.pending, state => {
  state.isLoading = true;
})
.addCase(getPopularRecipes.fulfilled, (state, action) => {
  state.isLoading = false;
  state.popular = action.payload;
})
.addCase(getPopularRecipes.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
});
  },
});

export const {
  setCategory,
  setArea,
  setIngredient,
  setPage,
  resetFilters,
} = recipesSlice.actions;

export default recipesSlice.reducer;
