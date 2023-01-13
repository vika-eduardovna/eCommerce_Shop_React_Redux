import { load_categories_action } from "../reducer/categoriesReducer";


export const loadCategories = async dispatch => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const payload = await response.json();
    dispatch(load_categories_action(payload))
}


