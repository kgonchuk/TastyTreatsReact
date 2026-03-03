import { createSlice } from "@reduxjs/toolkit";
import { findMasterClasses } from "./operations";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // pending
      .addCase(findMasterClasses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // fulfilled
      .addCase(findMasterClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      // rejected
      .addCase(findMasterClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;