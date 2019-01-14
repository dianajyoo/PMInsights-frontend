// export const storeToken = (access_token) => {
//   return {
//     type: 'STORE_TOKEN',
//     token: access_token
//   }
// }
//
// export const storeRefreshToken = (refresh_token) => {
//   return {
//     type: 'STORE_REFRESH_TOKEN',
//     refresh_token: refresh_token
//   }
// }

// <--- redux thunk here --->

export const getAccessToken = (base64, code, clientId) => {
  // debugger
    return (dispatch) => {
      fetch('https://api.fitbit.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + base64
        },
        body: `client_id=${clientId}&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdashboard&code=${code}`
      })
        .then(res => {
          if (res.status === 401) {
            console.log('expired token')
            getNewToken(base64, res.json().refresh_token)(dispatch)
            return res.json()
          } else {
            return res.json()
          }
        })
        .then(data => {
          if (localStorage.length === 1) {
            localStorage.setItem('token', data.access_token)
            localStorage.setItem('refresh_token', data.refresh_token)
          }
        })
        .catch(console.error)
    }
}

export const getNewToken = (base64, refresh_token) => {
    return (dispatch) => {
      fetch('https://api.fitbit.com/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + base64
        },
        body: `grant_type=refresh_token&refresh_token=${refresh_token}`
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('refresh_token', data.refresh_token)
        })
        .catch(console.error)
    }
}
