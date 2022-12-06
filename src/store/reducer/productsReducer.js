const defaultState = [];

export const productsReducer = (state = defaultState, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return action.payload
    } else {
        return state
    }
} 