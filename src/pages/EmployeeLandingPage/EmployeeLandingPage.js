import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { fetchEmployees } from "../../redux/actions";

// Components
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import EmployeeAddress from "../../components/EmployeeAddress/EmployeeAddress";
import Card from "../../shared/Card";

// Styles
import "./EmployeeLandingPage.scss";

class EmployeeLandingPage extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employeeList, employee } = this.props;

    return (
      <div className="EmployeeLandingPage">
        <h1>Employee App</h1>

        <div className="employee-container">
          {employeeList.length > 0 ? (
            <EmployeeList employeeList={employeeList} />
          ) : (
            <Card>
              <div className="msg">No employees yet.</div>
            </Card>
          )}

          {employee ? (
            <EmployeeAddress employee={employee} />
          ) : (
            <Card>
              <div className="msg">
                Select an employee from table to view the details.
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.employees.employees,
    employee: state.employee.employee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeLandingPage);
