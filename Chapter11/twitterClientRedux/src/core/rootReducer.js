import { combineReducers } from "redux";
import feed from './reducers/feedReducer';
import user from './reducers/userReducer';
import nav from './reducers/navReducer';

export default combineReducers({
  feed,
  user,
  nav
});
