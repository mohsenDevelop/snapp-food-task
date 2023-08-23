'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { reduxStore, persistor } from '@store/index';

const ReduxProvider = (props: React.PropsWithChildren) => {
    return (
        <Provider
            store={reduxStore}
        >
            <PersistGate loading={null} persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default ReduxProvider;
