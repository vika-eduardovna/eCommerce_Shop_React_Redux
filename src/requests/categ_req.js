//export const getProducts = (callback) =>
    //fetch('https://dummyjson.com/products/categories')
        //.then(res => res.json())
        //.then(json => callback(json))


export const getProducts = (callback) =>
        fetch('https://dummyjson.com/products?limit=30&skip=30&select=category,images')
        .then(res => res.json())
        .then(json => callback(json));

        
