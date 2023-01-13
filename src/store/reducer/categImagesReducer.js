const defaultState = [];
export const LOAD_CATEG_IMAGE = 'LOAD_CATEG_IMAGE';
export const load_categories_image_action = payload => {
    return {type: LOAD_CATEG_IMAGE, payload}
}

export const categImagesReducer = (state = defaultState, action) => {
    if (action.type === LOAD_CATEG_IMAGE) {
        return [...action.payload]
    } else {
        return state
    }
} 