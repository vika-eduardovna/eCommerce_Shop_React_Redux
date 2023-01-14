const defaultState = [];
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SEARCH_PROD = 'SEARCH_PROD';
export const SORT_PROD = 'SORT_PROD'
export const load_products_action = payload => {
    return { type: LOAD_PRODUCTS, payload }
}

export const search_product_action = payload => {
    return { type: SEARCH_PROD, payload }
}
export const sort_products_action = payload => {
    return { type: SORT_PROD, payload }
}

const sort = (state, sort_value) => {
    return [...state].sort((a, b) => {
        if (typeof (a[sort_value]) === 'string') {
            return a[sort_value].localeCompare(b[sort_value])
        } else {
            return a[sort_value] - b[sort_value]
        }
    })
}


export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    } else if (action.type === SORT_PROD) {
        return sort(state, action.payload)
    } else {
        return state
    }
} 