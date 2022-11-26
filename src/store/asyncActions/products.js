export const loadCategory = async dispatch => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const payload = await response.json()
    //const payload = data.map(({ image, category }) => ({
    //image, category
    //}));
    dispatch({ type: 'LOAD_CATEGORY', payload })

}


export const loadProductsPerCategory = async dispatch => {
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = await response.json()
    const payload = data.products.map(({ title, price, discountPercentage, thumbnail }) => ({
        title, price, discountPercentage,
        image: thumbnail
    }))
    dispatch({ type: 'LOAD_PRODUCTS', payload })
    console.log(payload);
}