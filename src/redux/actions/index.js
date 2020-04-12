import axios from "axios";
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_EMPLOYEE_ADDRESS_REQUEST,
  FETCH_EMPLOYEE_ADDRESS_SUCCESS,
  FETCH_EMPLOYEE_ADDRESS_FAILURE
} from "../constants/action-types";

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(fetchEmployeesRequest());
    axios
      .get("http://localhost:5000/employees")
      .then(response => {
        const employees = response.data;
        dispatch(fetchEmployeesSuccess(employees));
      })
      .catch(error => {
        dispatch(fetchEmployeesFailure(error.message));
      });
  };
};

export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST
  };
};

export const fetchEmployeesSuccess = employees => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees
  };
};

export const fetchEmployeesFailure = error => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error
  };
};

export const fetchEmployeeAddress = employeeId => {
  return dispatch => {
    dispatch(fetchEmployeeAddressRequest());
    axios
      .get(`http://localhost:5000/employees/address/${employeeId}`)
      .then(response => {
        const employee = response.data;
        dispatch(fetchEmployeeAddressSuccess(employee));
      })
      .catch(error => {
        dispatch(fetchEmployeeAddressFailure(error.message));
      });
  };
};

export const fetchEmployeeAddressRequest = () => {
  return {
    type: FETCH_EMPLOYEE_ADDRESS_REQUEST
  };
};

export const fetchEmployeeAddressSuccess = employee => {
  return {
    type: FETCH_EMPLOYEE_ADDRESS_SUCCESS,
    payload: employee
  };
};

export const fetchEmployeeAddressFailure = error => {
  return {
    type: FETCH_EMPLOYEE_ADDRESS_FAILURE,
    payload: error
  };
};
