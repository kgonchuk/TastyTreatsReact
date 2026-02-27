

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import  categoriesReducer  from './category/categorySlice';
import  areasReducer  from './areas/areasSlice';
import  ingredientsReducer  from './ingredients/ingredientsSlice';
import  eventsReducer  from './events/eventsSlice';
import  ordersReducer  from './orders/ordersSlice';
import  recipesReducer  from '../redux/recipes/recipesSlice';
import popularRecipesReducer from '../redux/popular/popularSlice';
import ratingSlice from './rating/ratingSlice';
import favoritesSlice from './favorites/favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['rating'],
};

const rootReducer = combineReducers({
  recipes: recipesReducer,
  popularRecipes: popularRecipesReducer, // 👈 ВАЖЛИВО
  categories: categoriesReducer,
  areas: areasReducer,
  ingredients: ingredientsReducer,
  events: eventsReducer,
  orders: ordersReducer,
  rating: ratingSlice,
  favorites: favoritesSlice,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);