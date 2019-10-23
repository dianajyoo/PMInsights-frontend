const initialState = {
  user: {},
  id: '',
  fetchIsLoading: false,
  sleep: {},
  fitBitUser: {},
  date: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IS_LOADING':
      return {
        ...state,
        fetchIsLoading: action.fetchIsLoading
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: action.user
      };
    case 'STORE_SPECIAL_ID':
      return {
        ...state,
        id: action.id
      };
    case 'LOGOUT_USER':
      return {
        user: {},
        id: '',
        token: '',
        fetchIsLoading: false,
        sleep: {},
        fitBitUser: {},
        heartRate: {},
        goal: {},
        goals: []
      };
    case 'STORE_SLEEP_DATA':
      return {
        ...state,
        sleep: action.data
      };
    case 'SET_FITBIT_USER':
      return {
        ...state,
        fitBitUser: action.user
      };
    case 'STORE_SLEEP_DATE':
      return {
        ...state,
        date: action.date
      };
    default:
      return state;
  }
};

export default userReducer;