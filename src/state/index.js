import { configureStore } from '@reduxjs/toolkit';
import uiReducers from './uiSlice';
import apiSlice from './apiSlice';

const store = configureStore({
    reducer: {
        ui: uiReducers,
        api: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

export default store;
