'use client';

import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
    return (
        <ToastContainer
            position='top-left'
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

export default ToastProvider;