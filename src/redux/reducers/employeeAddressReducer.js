import {
  FETCH_EMPLOYEE_ADDRESS_REQUEST,
  FETCH_EMPLOYEE_ADDRESS_SUCCESS,
  FETCH_EMPLOYEE_ADDRESS_FAILURE
} from "../constants/action-types";

const initialState = {
  loading: false,
  employee: null,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_EMPLOYEE_ADDRESS_SUCCESS:
      return {
        loading: false,
        employee: action.payload,
        error: ""
      };
    case FETCH_EMPLOYEE_ADDRESS_FAILURE:
      return {
        loading: false,
        employee: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
