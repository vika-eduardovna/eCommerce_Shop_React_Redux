const defaultState = [];

export const categoriesReducer = (state = defaultState, action) => {
    if (action.type === 'LOAD_CATEGORY') {
        return [...state, ...action.payload]
    } else {
        return state
    }
} 