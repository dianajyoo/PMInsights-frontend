import { combineReducers } from 'redux'
import userReducer from './userReducer'
import setGoalReducer from './setGoalReducer'
import editGoalReducer from './editGoalReducer'
import deleteGoalReducer from './deleteGoalReducer'
import heartRateReducer from './heartRateReducer'

export default combineReducers({
  user: userReducer,
  setGoal: setGoalReducer,
  editGoal: editGoalReducer,
  deleteGoal: deleteGoalReducer,
  heartRate: heartRateReducer
})
