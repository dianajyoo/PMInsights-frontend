const initialState = {
  goalDate: '',
  bedtimeTarget: '',
  wakeupTarget: '',
  goals: []
}

const setGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GOAL_DATE':
      return {
        ...state, goalDate: action.goalDate
      }
    case 'SET_BEDTIME':
      return {
        ...state, bedtimeTarget: action.bedtimeTarget
      }
    case 'SET_WAKEUP_TIME':
      return {
        ...state, wakeupTarget: action.wakeupTarget
      }
    case "SET_GOALS":
      return {
        ...state, goals: action.goals
      }
    default:
      return state
  }
}

export default setGoalReducer
