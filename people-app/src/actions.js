import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PEOPLE_FAILED,
  REQUEST_PEOPLE_PENDING,
  REQUEST_PEOPLE_SUCCESS
} from "./constants.js";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestPeople = () => (dispatch) => {
  dispatch({ type: REQUEST_PEOPLE_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_PEOPLE_FAILED, payload: error }));
};
