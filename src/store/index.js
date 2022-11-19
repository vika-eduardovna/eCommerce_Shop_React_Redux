import {combineReducers, createStore} from 'redux'
import {categoriesReducer} from '../store/reducer/categoriesReducer'


const rootReducer = combineReducers({
    //reviews: reviewsReducer,
    //services: servicesReducer,
    data: categoriesReducer
});

export const store = createStore(rootReducer);