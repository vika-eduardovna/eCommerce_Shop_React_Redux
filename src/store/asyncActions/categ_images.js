//import { load_categories_image_action } from "../reducer/categImagesReducer";

  export const loadImagePerCategory = (category, callback) => {
   
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((res) => {
      callback(res.products[1].images);
    });

  
}

