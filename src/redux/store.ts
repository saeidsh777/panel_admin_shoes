import { configureStore } from '@reduxjs/toolkit';
import adminShowMenuReducer from './slices/showMenu';
import modalReducer from './slices/showModal';

export const store = configureStore({
    reducer: { adminMenu: adminShowMenuReducer, modal: modalReducer },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
