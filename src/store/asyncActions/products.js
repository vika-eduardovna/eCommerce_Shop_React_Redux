
import { load_products_action } from "../reducer/productsReducer";

export const loadProductsPerCategory = category => {
    return async dispatch => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json()
    const payload = data.products.map(({ id, title, price, discountPercentage, images }) => ({
      id, title, price, discountPercentage,
      image: images[2],
      hide: false
    }))
    dispatch(load_products_action(payload))
  }
}