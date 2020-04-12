import React from "react";

// Components
import Employee from "../Employee/Employee";

// Styles
import "./EmployeeList.scss";

const EmployeeList = ({ employeeList }) => {
  return (
    <div className="EmployeeList">
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map(employee => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
