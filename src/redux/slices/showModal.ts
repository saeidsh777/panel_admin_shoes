import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isShow: false,
    componentName: null,
};

const modal = createSlice({
    name: 'showModal',
    initialState,
    reducers: {
        showModal(state, actions) {
            state.isShow = true;
            state.componentName = actions.payload;
        },
        hideModal(state) {
            state.isShow = false;
            state.componentName = null;
        },
    },
});

export const { showModal, hideModal } = modal.actions;
export default modal.reducer;
