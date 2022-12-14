import { load_item_action } from "../reducer/productItemReducer";

export const loadItemProduct = id => {
    return async dispatch => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const payload = await response.json();
        dispatch(load_item_action(payload))
    }

}