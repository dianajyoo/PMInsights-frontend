export const fetchIsLoading = (bool) => {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
};

export const setFitbitUser = (user) => {
  return {
    type: 'SET_FITBIT_USER',
    user: user
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

// <--- redux thunk here --->

export const fetchUser = (url, token) => {
  return (dispatch) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch(fetchUserSuccess(user));
      })
      .catch(console.error);
  };
};

export const fetchBackendUserData = (fitBitUser) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((user) => {
          if (fitBitUser.encodedId === user.encodedId) {
            dispatch(setFitbitUser(user));
          }
        });
      })
      .catch(console.error);
  };
};

export const logoutFitbitUser = (base64, token) => {
  return (dispatch) => {
    fetch('https://api.fitbit.com/oauth2/revoke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + base64
      },
      body: `token=${token}`
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch(logoutUser());
      })
      .catch(console.error);
  };
};

// export const fetchUserData = (url, date, token) => {
//     return (dispatch) => {
//       fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       })
//         .then(res => res.json())
//         .then(user => dispatch(fetchUserSuccess(user)))
//         .then(data => {
//           fetchSleepData(date, token)(dispatch)
//         })
//         .catch(console.error)
//     }
// }