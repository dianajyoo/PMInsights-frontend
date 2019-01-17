// SET GOAL

export const addGoal = (goal) => {
  return {
    type: 'ADD_GOAL',
    goal: goal
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

// LOAD GOALS

export const loadGoals = (goal) => {
  return {
    type: 'LOAD_GOALS',
    goal
  }
}

// EDIT GOAL

export const editGoal = (goal) => {
  return {
    type: 'EDIT_GOAL',
    goal: goal
  }
}

export const editGoalDate = (date) => {
  return {
    type: 'EDIT_GOAL_DATE',
    goalDate: date
  }
}

export const editBedtime = (time) => {
  return {
    type: 'EDIT_BEDTIME',
    bedtimeTarget: time
  }
}

export const editWakeupTime = (time) => {
  return {
    type: 'EDIT_WAKEUP_TIME',
    wakeupTarget: time
  }
}

// DELETE GOAL

export const deleteGoal = (goalId) => {
  return {
    type: 'DELETE_GOAL',
    id: goalId
  }
}

// <--- redux thunk here --->

export const getGoals = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/goals', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          data.forEach(goal => {
            dispatch(loadGoals(goal))
          })
        })
        .catch(console.error)
    }
}

export const addSleepGoal = (goalDate, bedtimeTarget, wakeupTarget, fitBitUser) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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
          dispatch(addGoal(data))
          dispatch(setGoalDate(data.goalDate))
          dispatch(setBedtime(data.bedtimeTarget))
          dispatch(setWakeupTime(data.wakeupTarget))
        })
        .catch(console.error)
    }
}

export const updateGoal = (goalId, goalDate, bedtimeTarget, wakeupTarget) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/goals/${goalId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          goalDate: goalDate,
          bedtimeTarget: bedtimeTarget,
          wakeupTarget: wakeupTarget
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch(editGoal(data))
          // dispatch(editGoalDate(data.goalDate))
          // dispatch(editBedtime(data.bedtimeTarget))
          // dispatch(editWakeupTime(data.wakeupTarget))
        })
        .catch(console.error)
    }
}

export const destroyGoal = (goalId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/goals/${goalId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: goalId
        })
      })
        .then(res => res.json())
        .then(data => {
          dispatch(deleteGoal(data.id))
        })
        .catch(console.error)
    }
}
