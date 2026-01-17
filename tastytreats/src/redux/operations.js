
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tasty-treats-backend.p.goit.global/api',
});






/* Master Classes */
export const findMasterClasses = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/events');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Categories */
export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Recipe by ID */
export const findRecipes = createAsyncThunk(
  'recipes/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/recipes/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Popular Recipes */
export const getPopularRecipes = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/recipes/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Areas */
export const fetchAreaRecipes = createAsyncThunk(
  'areas/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/areas');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Ingredients */
export const fetchIngredientsRecipes = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/ingredients');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Patch Rating */
export const patchRating = createAsyncThunk(
  'recipes/patchRating',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await api.patch(`/recipes/${id}/rating`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/* Post Order */
export const postOrder = createAsyncThunk(
  'orders/postOrder',
  async (orderData, thunkAPI) => {
    try {
      const { data } = await api.post('/orders/add', orderData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
