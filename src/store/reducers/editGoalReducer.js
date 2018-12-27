const initialState = {
  goalDate: '',
  bedtimeTarget: '',
  wakeupTarget: '',
  goals: []
}

const editGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_GOAL_DATE':
      return {
        ...state, goalDate: action.goalDate
      }
    case 'EDIT_BEDTIME':
      return {
        ...state, bedtimeTarget: action.bedtimeTarget
      }
    case 'EDIT_WAKEUP_TIME':
      return {
        ...state, wakeupTarget: action.wakeupTarget
      }
    case 'EDIT_GOALS':
      return {
        ...state, goals: action.goals
      }
    default:
      return state
  }
}

export default editGoalReducer
