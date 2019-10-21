export const storeSleepData = (data) => {
  return {
    type: 'STORE_SLEEP_DATA',
    data
  };
};

export const storeSleepDate = (date) => {
  return {
    type: 'STORE_SLEEP_DATE',
    date: date
  };
};

// <--- redux thunk here --->

export const fetchSleepData = (date, token) => {
  return (dispatch) => {
    fetch(`https://api.fitbit.com/1.2/user/-/sleep/date/${date}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(storeSleepData(data));
      })
      .catch(console.error);
  };
};