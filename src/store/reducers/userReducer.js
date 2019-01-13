const initialState = {
  user: {},
  fetchIsLoading: false,
  token: '',
  sleep: {},
  fitBitUser: {},
  date: ''
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
    case 'LOGOUT_USER':
      localStorage.clear()
      return {
        user: {},
        fetchIsLoading: false,
        token: '',
        sleep: {},
        fitBitUser: {},
        heartRate: {},
        goalDate: '',
        bedtimeTarget: '',
        wakeupTarget: '',
        goals: []
      }
    case 'STORE_TOKEN':
      localStorage.setItem('token', action.token)
      return {
        ...state, token: action.token
      }
    case 'STORE_SLEEP':
      return {
        ...state, sleep: action.data
      }
    case 'SET_FITBIT_USER':
      return {
        ...state, fitBitUser: action.user
      }
    case 'STORE_DATE':
      return {
        ...state, date: action.date
      }
    default:
      return state
  }
}

export default userReducer
