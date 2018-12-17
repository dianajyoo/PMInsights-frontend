// import { access_token } from '../App.js'

export const fetchHasErrored = (bool) => {
  return {
      type: 'FETCH_HAS_ERRORED',
      hasErrored: bool
  }
}
export const fetchIsLoading = (bool) => {
  return {
      type: 'FETCH_IS_LOADING',
      isLoading: bool
  }
}
export const fetchUserSuccess = (user) => {
  return {
      type: 'FETCH_USER_SUCCESS',
      user
  }
}
export const storeToken = (access_token) => {
  return {
      type: 'STORE_TOKEN',
      token: access_token
  }
}


// <--- redux thunk here --->

export const fetchUserData = (url, token) => {
    return (dispatch) => {
      dispatch(fetchIsLoading(true));
      fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      })
        .then(res => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          dispatch(fetchIsLoading(false));
          return res;
        })
        .then(res => res.json())
        .then(user => dispatch(fetchUserSuccess(user)))
        .catch(() => dispatch(fetchHasErrored(true)));
    };
}
