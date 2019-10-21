const initialState = {
  heartRate: {}
};

const heartRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HEART_RATE':
      return {
        ...state,
        heartRate: action.heartRate
      };
    default:
      return state;
  }
};

export default heartRateReducer;