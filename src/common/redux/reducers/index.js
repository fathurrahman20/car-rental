import { combineReducers } from 'redux';
import users from './user';
import admin from './admin';

export default combineReducers({
  users,
  admin,
});
