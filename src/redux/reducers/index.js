import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import employeeAddressReducer from "./employeeAddressReducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  employee: employeeAddressReducer
});

export default rootReducer;
