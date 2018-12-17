const initialState = {
  token: ''
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ACCESS_TOKEN':
      return {...state, token: action.token}
    default:
      return state
  }
}

export default tokenReducer
