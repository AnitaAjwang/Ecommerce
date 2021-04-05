import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import errorReducer from './errorReducer';
import itemReducer from './itemReducer';
import orderReducer from './orderReducer';

export default combineReducers( {
    auth:authReducer,
    cart:cartReducer,
    error:errorReducer,
    item:itemReducer,
    order:orderReducer});