import { combineReducers } from 'redux';
import genreReducer from './genreReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
    genreReducer, 
    bookReducer
})