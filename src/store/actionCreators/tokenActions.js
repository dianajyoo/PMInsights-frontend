export const storeToken = (access_token) => {
  return {
    type: 'STORE_TOKEN',
    token: access_token
  }
}

// <--- redux thunk here --->

export const getAccessToken = (base64, code, clientId) => {
    return (dispatch) => {
      fetch('https://api.fitbit.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + base64
        },
        body: `client_id=${clientId}&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdashboard&code=${code}`
      })
        .then(res => res.json())
        .then(data => {
          dispatch(storeToken(data.access_token))
        })
        .catch(console.error)
    }
}
