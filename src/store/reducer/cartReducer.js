const defaultState = [];
export const CLEAR_CART = 'CLEAR_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const DELETE_ITEM = 'DELETE_ITEM'
export const add_to_cart_action = (id, title, price, image) => {
    return {
        type: ADD_TO_CART,
        payload: { id, title, price, image }
    }
}

export const increase_count_action = id => {
    return { type: INCREASE_COUNT, payload: id }
}
export const decrease_count_action = id => {
    return { type: DECREASE_COUNT, payload: id }
}

export const clear_cart_action = () => {
    return { type: CLEAR_CART }
}

export const delete_item_action = payload => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

const checkProduct = (state, product) => {
    const productInState = state.find(({ id }) => id === product.id);
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, { ...product, count: 1 }]
    }
}

export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } else if (action.type === INCREASE_COUNT) {
        state.find(({ id }) => id === action.payload).count++
        return [...state]
    } else if (action.type === DECREASE_COUNT) {
        const result = state.find(({ id }) => id === action.payload);
        if (result.count === 1) {
            state = state.filter(({ id }) => id !== action.payload);
        } else {
            result.count--;
        }
        return [...state]
    } else if (action.type === CLEAR_CART) {
        return defaultState
    } else if (action.type === DELETE_ITEM) {
        return state.filter(el => el.id !== action.payload)
    } else {
        return state
    }
}