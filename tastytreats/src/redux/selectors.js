import { createSelector } from '@reduxjs/toolkit';

export const selectRecipesParams = createSelector(
  [
    state => state.recipes.filters,
    state => state.recipes.page,
  ],
  (filters, page) => ({
    ...filters,
    page,
    limit: 9,
  })
);




export const selectPopularRecipes = state =>
  state.popularRecipes.items;

export const selectPopularRecipesLoading = state =>
  state.popularRecipes.isLoading;

export const selectPopularRecipesError = state =>
  state.popularRecipes.error;
