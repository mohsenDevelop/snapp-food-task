import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinalResult } from 'src/typings/vendorType';

interface initialState {
    vendorList: FinalResult[]
}

const initialState: any = {
    vendorList: []
};

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        vendorListAction: (state, action: PayloadAction<{ list: FinalResult[] }>) => {
            state.vendorList = action.payload.list;
            return state;
        },
        addToVendorListAction: (state, action: PayloadAction<{ list: FinalResult[] }>) => {

            const newList = [...state.vendorList, ...action.payload.list];
            state.vendorList = newList;
            return state;
        },

    },
});

export const { vendorListAction, addToVendorListAction } = vendorSlice.actions;
