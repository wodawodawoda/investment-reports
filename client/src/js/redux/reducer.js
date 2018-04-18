// import { combineReducers } from 'redux';
// import { settings } from './settingsReducer';
// import {items, itemsHasErrored, itemsIsLoading} from './importantValuesReducer.js';
//
// const reducer = combineReducers({
//   items,
//   itemsHasErrored,
//   itemsIsLoading,
//   settings
// });
//
// export default reducer

import { combineReducers } from 'redux';
import { settings } from './settingsReducer';
import {items, itemsHasErrored, itemsIsLoading} from './importantValuesReducer.js';
import { users, usersHasErrored, usersIsLoading } from './usersReducer';

const reducer = combineReducers({
  items,
  itemsIsLoading,
  itemsHasErrored,
  settings,
  users,
  // usersIsLoading,
  // usersHasErrored,
});

export default reducer