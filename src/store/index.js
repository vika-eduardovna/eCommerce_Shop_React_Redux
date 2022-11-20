import {combineReducers, createStore} from 'redux'
import {categoriesReducer} from '../store/reducer/categoriesReducer'
import { promoReducer } from './reducer/promoReducer';


const rootReducer = combineReducers({
    //reviews: reviewsReducer,
    promo_data: promoReducer,
    data: categoriesReducer
});

export const store = createStore(rootReducer);