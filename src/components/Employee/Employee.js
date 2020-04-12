import React from "react";
import { connect } from "react-redux";

// Actions
import { fetchEmployeeAddress } from "../../redux/actions";

// Styles
import "./Employee.scss";

const Employee = props => {
  const { id, name, age, gender } = props.employee;

  return (
    <React.Fragment>
      <tr className="Employee" onClick={() => props.fetchEmployeeAddress(id)}>
        <td data-label="Id">{id}</td>
        <td data-label="Name">{name}</td>
        <td data-label="Age">{age}</td>
        <td data-label="Gender">{gender}</td>
      </tr>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployeeAddress: id => dispatch(fetchEmployeeAddress(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Employee);
