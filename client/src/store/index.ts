'use client';
import { configureStore } from '@reduxjs/toolkit';
import attackSlice from './slices/attackSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        attack: attackSlice.reducer,
        ui: uiSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;