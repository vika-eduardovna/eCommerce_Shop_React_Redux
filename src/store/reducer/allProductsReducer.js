const defaultState = [];
export const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
export const load_all_products_action = payload => {
    return { type: LOAD_ALL_PRODUCTS, payload }
}

export const allProductsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}