const defaultState = [];

export const productsReducer = (state = defaultState, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return [...state, ...action.payload]
    } else {
        return state
    }
} 