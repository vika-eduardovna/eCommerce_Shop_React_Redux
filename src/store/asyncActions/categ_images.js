import { load_categories_image_action } from "../reducer/categImagesReducer";

  export const loadImagePerCategory = category => {
    return async dispatch => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json()
    const payload = data.products[0].images
    dispatch(load_categories_image_action(payload))
  }
}

