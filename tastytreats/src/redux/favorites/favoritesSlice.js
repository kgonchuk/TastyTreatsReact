import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  selectedCategory: 'All',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
    },
    toggleFavorite: (state, action) => {
  const exists = state.favorites.find(
    item => item._id === action.payload._id
  );

  if (exists) {
    state.favorites = state.favorites.filter(
      item => item._id !== action.payload._id
    );
  } else {
    state.favorites.push(action.payload);
  }
},
setFavoriteCategory: (state, action) => {
  state.selectedCategory = action.payload;
},
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite, setFavoriteCategory } = favoritesSlice.actions;

export default favoritesSlice.reducer;
