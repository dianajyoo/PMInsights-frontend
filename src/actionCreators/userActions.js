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
      fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRGQ0wiLCJzdWIiOiI3MkNWUzMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTQ1MjMzMjY5LCJpYXQiOjE1NDQ2NDM2MzJ9.a8TDnT5PPBwDe7OsM5HmCkzdxDxp74tIscGcRMULIRs"
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
