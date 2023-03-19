import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryReducer from '../features/categories/categorySlice';
import serviceReducer from '../features/services/serviceSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoryReducer,
    services: serviceReducer
  },
});
