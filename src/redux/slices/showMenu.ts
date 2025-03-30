import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profileMenu: false,
    notifMenu: false,
    aside: true,
};

const showMenu = createSlice({
    name: 'showMenu',
    initialState,
    reducers: {
        showProfileMenu(state) {
            if (state.notifMenu) {
                state.notifMenu = false;
                state.profileMenu = !state.profileMenu;
            } else {
                state.profileMenu = !state.profileMenu;
            }
        },
        showNotifMenu(state) {
            if (state.profileMenu) {
                state.profileMenu = false;
                state.notifMenu = !state.notifMenu;
            } else {
                state.notifMenu = !state.notifMenu;
            }
        },
        showAside(state) {
            state.aside = !state.aside;
        },
    },
});

export const { showProfileMenu, showNotifMenu, showAside } = showMenu.actions;

export default showMenu.reducer;
