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
    case 'ADD_GOAL':
      console.log(action.goal)
      const addedGoals = state.goals.concat(action.goal)
      return {
        ...state, goals: addedGoals
      }
    case 'LOAD_GOALS':
      return {
        ...state, goals: [...state.goals, action.goal]
      }
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
    case 'EDIT_GOAL':
      const editedGoals = state.goals.map( goal => {
        if (action.goal.id === goal.id) {
          return {...goal, ...action.goal}
        }
        return goal
      })
      return {
        ...state, goals: editedGoals
      }
    case "DELETE_GOAL":
      const filteredArr = [...state.goals].filter(goal => {
        return goal.id !== action.id
      })
      return {
        ...state, goals: filteredArr
      }
    default:
      return state
  }
}

export default setGoalReducer
