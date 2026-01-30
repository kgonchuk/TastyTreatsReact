import { createSlice } from '@reduxjs/toolkit';
import { postOrder } from '../operations';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    success: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(postOrder.pending, state => {
        state.isLoading = true;
      })
      .addCase(postOrder.fulfilled, state => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ordersSlice.reducer;
