import { combineReducers } from 'redux';
import userReducer from './userReducer';
import setGoalReducer from './setGoalReducer';
import heartRateReducer from './heartRateReducer';

export default combineReducers({
  user: userReducer,
  goal: setGoalReducer,
  heartRate: heartRateReducer
});