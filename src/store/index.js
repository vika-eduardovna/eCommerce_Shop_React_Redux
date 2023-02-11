import { combineReducers, createStore, applyMiddleware } from 'redux'
import { categoriesReducer } from '../store/reducer/categoriesReducer'
import { productsReducer } from './reducer/productsReducer';
import { cartReducer } from './reducer/cartReducer';
import { productItemReducer } from './reducer/productItemReducer';
import { allProductsReducer } from './reducer/allProductsReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    product_item: productItemReducer,
    all_products: allProductsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));