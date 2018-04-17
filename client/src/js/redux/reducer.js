import { combineReducers } from 'redux';
import { settings } from './settingsReducer';
import {items, itemsHasErrored, itemsIsLoading} from './importantValuesReducer.js';

const reducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  settings
});

export default reducer