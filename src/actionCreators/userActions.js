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

// <--- redux thunk here --->

export const fetchUserData = (url) => {
    return (dispatch) => {
      dispatch(fetchIsLoading(true));
      fetch(url)
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
