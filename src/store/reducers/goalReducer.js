const initialState = {
  goals: []
};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GOALS':
      return {
        ...state,
        goals: action.goals
      };
    case 'ADD_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.goal]
      };
    case 'EDIT_GOAL':
      const goals = state.goals.filter((goal) => {
        return action.goal.id !== goal.id;
      });
      return {
        ...state,
        goals: [...goals, action.goal]
      };
    case 'DELETE_GOAL':
      const filteredGoals = [...state.goals].filter((goal) => {
        return goal.id !== action.id;
      });
      return {
        ...state,
        goals: filteredGoals
      };
    default:
      return state;
  }
};

export default goalReducer;