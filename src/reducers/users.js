const initialState = {
  user: {},
  fetchIsLoading: false,
  fetchHasErrored: false,
  token: '',
  sleep: {},
  goalDate: '',
  bedtimeTarget: '',
  wakeupTarget: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HAS_ERRORED':
      return {
        ...state, fetchHasErrored: action.fetchHasErrored
      }
    case 'FETCH_IS_LOADING':
      return {
        ...state, fetchIsLoading: action.fetchIsLoading
      }
    case 'FETCH_USER_SUCCESS':
      return {
        ...state, user: action.user
      }
    case 'STORE_TOKEN':
      // debugger
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
    default:
      return state
  }
}

export default userReducer
