import { combineReducers } from 'redux';
import userReducer from './userReducer';
import goalReducer from './goalReducer';
import heartRateReducer from './heartRateReducer';
import activityReducer from './activityReducer';

export default combineReducers({
  user: userReducer,
  goal: goalReducer,
  heartRate: heartRateReducer,
  activity: activityReducer
});