const defaultState = [];
export const LOAD_ITEM_PRODUCT = 'LOAD_ITEM_PRODUCT'
export const load_item_action = payload => ({ type: LOAD_ITEM_PRODUCT, payload })

export const productItemReducer = (state = defaultState, action) => {
    if (action.type === LOAD_ITEM_PRODUCT) {
        return action.payload
    } else {
        return state
    }
}