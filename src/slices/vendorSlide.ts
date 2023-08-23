import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinalResult } from 'src/typings/vendorType';

interface initialState {
    vendorList: FinalResult[]
}

const initialState: any = {
    vendorList: []
};

export const vendorSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        vendorListAction: (state, action: PayloadAction<FinalResult[]>) => {
            state.vendorList.isOpen = action.payload;
            return state;
        },

    },
});

export const { vendorListAction } = vendorSlice.actions;
