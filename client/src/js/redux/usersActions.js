export const GET_USERS = "GET_USERS";
export const USERS_HAS_ERRORED   = 'USERS_HAS_ERRORED';
export const USERS_IS_LOADING = 'USERS_IS_LOADING';
export const USERS_FETCH_DATA_SUCCESS = 'USERS_FETCH_DATA_SUCCESS';

export function usersHasErrored(bool) {
  return {
    type: USERS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function usersIsLoading(bool) {
  return {
    type: USERS_IS_LOADING,
    isLoading: bool
  };
}

export function usersFetchDataSuccess(users) {
  return {
    type: USERS_FETCH_DATA_SUCCESS,
    users
  };
}

export function usersFetchData(url) {
  return (dispatch) => {
    dispatch(usersIsLoading(true));
    // console.log('working')
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(usersIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((users) => {
        dispatch(usersFetchDataSuccess(users))
      })
      .catch(() => dispatch(usersHasErrored(true)));
  };
}