import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './reducer';

const store = configureStore({
  reducer: {
    storeCards: cardReducer,
  },
});

export {store};
