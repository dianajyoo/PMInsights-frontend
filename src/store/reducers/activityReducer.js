const initialState = {
  activity: {}
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_USER_ACTIVITY':
      return {
        ...state,
        activity: action.data
      };
    default:
      return state;
  }
};

export default activityReducer;