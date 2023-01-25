const defaultState = [];
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SEARCH_PROD = 'SEARCH_PROD';
export const SORT_PROD = 'SORT_PROD';
export const PRICE_RANGE = 'PRICE_RANGE';

export const load_products_action = payload => {
    return { type: LOAD_PRODUCTS, payload }
}

export const search_product_action = payload => {
    return { type: SEARCH_PROD, payload }
}

export const sort_products_action = payload => {
    return { type: SORT_PROD, payload }
}

export const price_range_action = payload => {
    return { type: PRICE_RANGE, payload }
}

const sort = (state, sort_value) => {
    return [...state].sort((a, b) => {
        if (typeof (a[sort_value]) === 'string') {
            return a[sort_value].localeCompare(b[sort_value])
        } else if (sort_value === 'ascending') {
            return a.price - b.price
        } else if (sort_value === 'descending') {
            return b.price - a.price
        }
    }
    )
}


export const productsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload
    } else if (action.type === SORT_PROD) {
        return sort(state, action.payload)
    } else if (action.type === PRICE_RANGE) {
        return [...state.map(product => {
            product.show_flg = product.price >= action.payload.min && product.price <= action.payload.max
            return product
        })]
    } else {
        return state
    }
} 