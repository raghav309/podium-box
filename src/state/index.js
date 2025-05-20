import { configureStore } from '@reduxjs/toolkit';
import uiReducers from './uiSlice';

const store = configureStore({
    reducer: {
        ui: uiReducers,
    },
});

export default store;
