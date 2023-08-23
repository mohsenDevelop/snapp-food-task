import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux';

import { vendorSlice } from '@slices/vendorSlide';
import { rtkQueryErrorLogger } from '@config/ErrorMiddleware';
import { api } from '@api/client/api';
import persistMiddleware from '@config/persistMiddleware';

const cartPersistConfig = {
    key: 'cart',
    storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    [vendorSlice.name]: vendorSlice.reducer,
    // [cartSlice.name]: persistReducer(cartPersistConfig, cartSlice.reducer)
});

export const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(api.middleware).concat(persistMiddleware).concat(rtkQueryErrorLogger);
    },
});

export const persistor = persistStore(reduxStore);

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
