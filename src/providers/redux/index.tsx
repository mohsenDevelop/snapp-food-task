'use client';

import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { store } from '@store/index';

const ReduxProvider = (props: React.PropsWithChildren) => {
    return (
        <Provider
            store={store}
        >
            {props.children}
        </Provider>
    );
};

export default ReduxProvider;
