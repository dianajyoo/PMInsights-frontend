export const getHeartRate = (heartRate) => {
  return {
    type: 'GET_HEART_RATE',
    heartRate: heartRate
  };
};

// <--- redux thunk here --->

export const fetchHeartRate = (date, token) => {
  return (dispatch) => {
    fetch(
      `https://api.fitbit.com/1/user/-/activities/heart/date/${date}/1d.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(getHeartRate(data));
      })
      .catch(console.error);
  };
};