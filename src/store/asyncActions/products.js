
import { load_products_action } from "../reducer/productsReducer";
import { load_all_products_action } from "../reducer/allProductsReducer";

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

export const loadAllProducts = () => {
  return async dispatch => {
    const response = await fetch('https://dummyjson.com/products?limit=0');
    const data = await response.json();
    const payload = data.products.map(({id, title, price, thumbnail, stock, rating, discountPercentage}) => ({
      id, title, price, stock, rating, discountPercentage,
    image: thumbnail
   }))
   
   dispatch(load_all_products_action(payload))
   
  }
  
}