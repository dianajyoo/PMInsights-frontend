// GET GOALS
export const loadGoals = (goals) => {
  return {
    type: 'LOAD_GOALS',
    goals
  };
};

// POST GOAL
export const addGoal = (goal) => {
  return {
    type: 'ADD_GOAL',
    goal
  };
};

// EDIT GOAL
export const editGoal = (goal) => {
  return {
    type: 'EDIT_GOAL',
    goal
  };
};

// DELETE GOAL
export const deleteGoal = (goalId) => {
  return {
    type: 'DELETE_GOAL',
    id: goalId
  };
};

export const getGoals = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((goals) => {
        dispatch(loadGoals(goals));
      })
      .catch(console.error);
  };
};

export const postGoal = (
  goalDate,
  goal,
  fitBitUser
) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        goalDate,
        goal,
        user_id: fitBitUser.user.encodedId
      })
    })
      .then((res) => res.json())
      .then((goal) => {
        dispatch(addGoal(goal));
      })
      .catch(console.error);
  };
};

export const updateGoal = (goalId, goalDate, goal) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/goals/${goalId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        goalDate: goalDate,
        goal: goal
      })
    })
      .then((res) => res.json())
      .then((goal) => {
        dispatch(editGoal(goal));
      })
      .catch(console.error);
  };
};

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
      .then((res) => res.json())
      .then((data) => {
        dispatch(deleteGoal(data.id));
      })
      .catch(console.error);
  };
};