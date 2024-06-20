import { combineReducers } from 'redux';
import cartReducers from './cartReducers';
import checkoutReducer from './checkoutReducer';

const rootReducer = combineReducers({
    cartReducers,
    checkoutReducer
});

export default rootReducer;