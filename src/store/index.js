import {combineReducers, createStore, applyMiddleware} from 'redux'
import {categoriesReducer} from '../store/reducer/categoriesReducer'
import { promoReducer } from './reducer/promoReducer';
import { productsReducer } from './reducer/productsReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    promo_data: promoReducer,
    categories: categoriesReducer,
    products: productsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));