import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    rating: 0,
    email: "",
  },
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetRatingForm: (state) => {
      state.rating = 0;
      state.email = "";
    },
  },
});

export const { setRating, setEmail, resetRatingForm } =
  ratingSlice.actions;

export default ratingSlice.reducer;
