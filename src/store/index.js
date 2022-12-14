import { combineReducers, createStore, applyMiddleware } from 'redux'
import { categoriesReducer } from '../store/reducer/categoriesReducer'
import { promoReducer } from './reducer/promoReducer';
import { productsReducer } from './reducer/productsReducer';
import { cartReducer } from './reducer/cartReducer';
import {productItemReducer} from './reducer/productItemReducer'
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    promo_data: promoReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    product_item: productItemReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));