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

export const storeSleepData = (data) => {
  return {
    type: 'STORE_SLEEP',
    data
  }
}

export const setGoalDate = (date) => {
  return {
    type: 'SET_GOAL_DATE',
    goalDate: date
  }
}

export const setBedtime = (time) => {
  return {
    type: 'SET_BEDTIME',
    bedtimeTarget: time
  }
}

export const setWakeupTime = (time) => {
  return {
    type: 'SET_WAKEUP_TIME',
    wakeupTarget: time
  }
}

export const setFitbitUser = (user) => {
  return {
    type: 'SET_FITBIT_USER',
    user: user
  }
}

export const setGoals = (goals) => {
  return {
    type: 'SET_GOALS',
    goals: goals
  }
}


// <--- redux thunk here --->

export const fetchUserData = (url, token) => {
    return (dispatch) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => res.json())
        .then(user => dispatch(fetchUserSuccess(user)))
        .catch(() => dispatch(fetchHasErrored(true)))
    }
}

export const fetchSleepData = (url, token) => {
    return (dispatch) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => res.json())
        .then(data => {
          dispatch(storeSleepData(data))})
        .catch(() => dispatch(fetchHasErrored(true)))
    }
}

export const fetchSleepGoals = (goalDate, bedtimeTarget, wakeupTarget, fitBitUser, token) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          goalDate: goalDate,
          bedtimeTarget: bedtimeTarget,
          wakeupTarget: wakeupTarget,
          user_id: fitBitUser.id
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch(setGoalDate(data.goalDate))
          dispatch(setBedtime(data.bedtimeTarget))
          dispatch(setWakeupTime(data.wakeupTarget))
        })
        .catch(console.error)
    }
}

export const fetchBackendUserData = (token, fitBitUser) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => res.json())
        .then(data => {
          data.forEach(user => {
            if (fitBitUser.encodedId === user.encodedId){
              dispatch(setFitbitUser(user))
            }
          })
        })
        .catch(() => dispatch(fetchHasErrored(true)))
    }
}

export const fetchGoalData = (token) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/goals', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => res.json())
        .then(data => {
          dispatch(setGoals(data))
        })
        .catch(() => dispatch(fetchHasErrored(true)))
    }
}
