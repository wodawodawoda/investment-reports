export function users(state = [{  id: 6,
  name: "John Doe",
  image: "/images/user4.jpg",
  branch: "New York",
  status: "finished"}], action) {
  switch (action.type) {
    case 'USERS_FETCH_DATA_SUCCESS':
      return action.users;
    default:
      return state;
  }
}

export function usersHasErrored(state = false, action) {
  switch (action.type) {
    case 'USERS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case 'USERS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}