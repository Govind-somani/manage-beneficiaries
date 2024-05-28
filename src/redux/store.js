import { configureStore } from '@reduxjs/toolkit';
import beneficiariesReducer from './bs';

export const store = configureStore({
  reducer: {
    beneficiaries: beneficiariesReducer,
  },
});
