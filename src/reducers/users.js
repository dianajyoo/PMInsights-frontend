const initialState = {
  user: {},
  fetchIsLoading: false,
  token: '',
  sleep: {},
  goalDate: '',
  bedtimeTarget: '',
  wakeupTarget: '',
  fitBitUser: {},
  goals: [],
  heartRate: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return {
        ...state, fetchIsLoading: action.fetchIsLoading
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state, user: action.user
      }
    case 'STORE_TOKEN':
      localStorage.setItem("token", action.token)
      return {
        ...state, token: action.token
      }
    case 'STORE_SLEEP':
      return {
        ...state, sleep: action.data
      }
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
    case "SET_FITBIT_USER":
      return {
        ...state, fitBitUser: action.user
      }
    case "SET_GOALS":
      return {
        ...state, goals: action.goals
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
    case 'EDIT_GOALS':
      return {
        ...state, goals: action.goals
      }
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
    case 'GET_HEART_RATE':
      return {
        ...state, heartRate: action.heartRate
      }
    default:
      return state
  }
}

export default userReducer
