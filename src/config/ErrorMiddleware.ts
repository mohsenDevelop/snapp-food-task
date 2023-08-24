import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {

    if (isRejectedWithValue(action)) {

        if (action?.payload.status === 'FETCH_ERROR') {
            { toast.error('ارور سرور'); return; }
        }

        if (action?.payload.status === 404) {
            toast.error('درخواست مورد نظر یافت نشد');
            return;
        }

        if (action?.error?.message === 'Rejected') {
            return;
        }
    }

    return next(action);
};