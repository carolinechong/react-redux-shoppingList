// Make requests to backend
import axios from 'axios';

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// getItems is called within ShoppingList component
export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/items') // make a request to server endpoint
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data // data from backend
            })
        );
};

export const addItem = (item) => dispatch => {
    axios
        .post('/items', item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data // res.data = item from server>controller>item>create
            }))
};

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/items/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            }))
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};