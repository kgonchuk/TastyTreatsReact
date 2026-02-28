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

export const selectCategories = state => state.categories.items;
export const selectFavoriteCategory = state =>
  state.favorites.selectedCategory;

export const selectFavorites=state => state.favorites.favorites;

export const selectFilteredFavorites = createSelector(
  [selectFavorites, selectFavoriteCategory],
  (favorites, category) => {
    if (category === "All") return favorites;

    return favorites.filter(
      recipe => recipe.category === category
    );
  }
);


export const selectPopularRecipes = state =>
  state.popularRecipes.items;

export const selectPopularRecipesLoading = state =>
  state.popularRecipes.isLoading;

export const selectPopularRecipesError = state =>
  state.popularRecipes.error;
