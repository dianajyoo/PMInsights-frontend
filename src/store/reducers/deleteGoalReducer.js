const initialState = {
  goalDate: '',
  bedtimeTarget: '',
  wakeupTarget: '',
  goals: []
}

const deleteGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_GOAL_DATE':
      return {
        ...state, goalDate: action.goalDate
      }
    case 'DELETE_BEDTIME':
      return {
        ...state, bedtimeTarget: action.bedtimeTarget
      }
    case 'DELETE_WAKEUP_TIME':
      return {
        ...state, wakeupTarget: action.wakeupTarget
      }
    case 'DELETE_GOALS':
      return {
        ...state, goals: action.goals
      }
    default:
      return state
  }
}

export default deleteGoalReducer
