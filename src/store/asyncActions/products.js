export const loadCategory = async dispatch => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    const payload = await response.json()
    //const payload = data.map(({ image, category }) => ({
        //image, category
    //}));
    dispatch({ type: 'LOAD_CATEGORY', payload })
    
}



export const loadProducts = async dispatch => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
    const payload = await response.json()
    dispatch({ type: 'LOAD_PRODUCTS', payload })
}