import { combineReducers } from 'redux';
// import {comments} from './commentReducer.js';
// import users from './users.js';
import {items, itemsHasErrored, itemsIsLoading} from './importantValuesReducer.js';

const reducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading
});

export default reducer