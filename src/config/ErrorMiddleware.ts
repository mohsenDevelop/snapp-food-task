import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {

    if (isRejectedWithValue(action)) {

        if (action?.payload.status === 'FETCH_ERROR') {
            return;
        }

        if (action?.error?.message === 'Rejected') {
            return;
        }
    }

    return next(action);
};