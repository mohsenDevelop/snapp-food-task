import { REHYDRATE } from 'redux-persist/lib/constants';
import { Middleware } from 'redux';

const persistMiddleware: Middleware = (store) => (dispatch) => async (
    action,
) => {
    if (action.type === REHYDRATE && action.key === 'cart') {
        dispatch(action);
    } else {
        dispatch(action);
    }
};

export default persistMiddleware;