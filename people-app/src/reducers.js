import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PEOPLE_FAILED,
  REQUEST_PEOPLE_PENDING,
  REQUEST_PEOPLE_SUCCESS
} from "./constants.js";

// initial values for action outputs
const initialStateSearch = {
  searchField: ""
};

const initialStatePeople = {
    isPending: false,
    people: [],
    error: ''
}

// reducer, pure function (will do the same thing for all inputs)
// defines what happens to the state per action
// format:
/*
    export const REDUCER_NAME = (state=YOUR_INITIAL_STATE, action={}) => {
        switch(action.type) {
            case ACTION_TYPE_1:
                return { ...state, ATTRIBUTE: action.payload };
            case ACTION_TYPE_2:
                return { ...state, ATTRIBUTE: action.payload };
            ...
            default: // DO NOT FORGET
                return state;
    }
*/

// for searchbar
export const searchPeople = (state=initialStateSearch, action={}) => {
  console.log(action.type);

  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

// for requesting users through the API
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
