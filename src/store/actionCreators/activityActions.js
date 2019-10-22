export const storeUserActivity = (data) => {
  return {
    type: 'STORE_USER_ACTIVITY',
    data
  };
};

export const getUserActivity = (date, token) => {
  return (dispatch) => {
    fetch(`https://api.fitbit.com/1/user/-/activities/date/${date}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(storeUserActivity(data));
      })
      .catch(console.error);
  };
};