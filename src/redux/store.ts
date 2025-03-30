import { configureStore } from '@reduxjs/toolkit';
import adminShowMenuReducer from './slices/showMenu';

export const store = configureStore({
    reducer: { adminMenu: adminShowMenuReducer },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
