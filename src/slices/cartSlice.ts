import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        authModalAction: (state, action: PayloadAction<{ isOpen: boolean }>) => {
            state.authFormModal.isOpen = action.payload.isOpen;
            return state;
        },

    },
});

export const { authModalAction } = cartSlice.actions;
