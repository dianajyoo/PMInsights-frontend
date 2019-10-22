import { combineReducers } from 'redux';
import userReducer from './userReducer';
import setGoalReducer from './setGoalReducer';
import heartRateReducer from './heartRateReducer';
import activityReducer from './activityReducer';

export default combineReducers({
  user: userReducer,
  goal: setGoalReducer,
  heartRate: heartRateReducer,
  activity: activityReducer
});