// Make requests to backend
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// getItems is called within ShoppingList component
export const getItems = () => {
    return {
        type: GET_ITEMS //sends action type to itemReducer
    };
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item //item object from ItemModal form
    };
}