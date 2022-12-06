

export const loadCategory = async dispatch => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json()
    const payload = data.products.map(({id, category, thumbnail}) => ({
        id, category, thumbnail
    }));
  
    dispatch({ type: 'LOAD_CATEGORY', payload })
}


 