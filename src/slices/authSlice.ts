import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    authFormModal: {
        isOpen: false,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authModalAction: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.authFormModal.isOpen = action.payload.isOpen;
            return state;
        },

    },
});

export const { authModalAction } = authSlice.actions;
