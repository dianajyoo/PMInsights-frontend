const initialState = {
  user: {},
  fetchIsLoading: false,
  fetchHasErrored: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_HAS_ERRORED':
      return {...state, fetchHasErrored: action.fetchHasErrored}
    case 'FETCH_IS_LOADING':
      return {...state, fetchIsLoading: action.fetchIsLoading}
    case 'FETCH_USER_SUCCESS':
      return {...state, user: action.user}
    default:
      return state
  }
}

export default userReducer
