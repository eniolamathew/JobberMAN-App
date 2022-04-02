const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, isLoading: true, showAlert: false, editComplete: false };
  }
  if (action.type === "REGISTER_USER_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
    };
  }
  if (action.type === "REGISTER_USER_ERROR") {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  }
  if (action.type === "LOGOUT_USER") {
    return {
      ...state,
      user: null,
      showAlert: false,
      jobs: [],
      isEditing: false,
      editItem: null,
    };
  }

  if (action.type === "FETCH_JOBS_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      editItem: null,
      singleJobError: false,
      editComplete: false,
      jobs: action.payload,
    };
  }
};

export default reducer;
