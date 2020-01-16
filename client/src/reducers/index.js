import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    // 'item' is how it is identified within components
    item: itemReducer
});