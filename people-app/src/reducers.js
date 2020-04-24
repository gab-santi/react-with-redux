import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PEOPLE_FAILED,
  REQUEST_PEOPLE_PENDING,
  REQUEST_PEOPLE_SUCCESS
} from "./constants.js";

const initialStateSearch = {
  searchField: ""
};

const initialStatePeople = {
    isPending: false,
    people: [],
    error: ''
}

// reducer, pure function
export const searchPeople = (state=initialStateSearch, action={}) => {
  console.log(action.type);

  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestPeople = (state=initialStatePeople, action={}) => {
  switch (action.type) {
    case REQUEST_PEOPLE_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PEOPLE_SUCCESS:
      return { ...state, people: action.payload, isPending: false };
    case REQUEST_PEOPLE_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
