import { configureStore } from '@reduxjs/toolkit';

import { api } from '@api/client/api';
import { vendorSlice } from '@slices/vendorSlide';
import { rtkQueryErrorLogger } from '@config/ErrorMiddleware';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [vendorSlice.name]: vendorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware).concat(rtkQueryErrorLogger);
    },
    devTools: process.env.NODE_ENV === 'development'
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch