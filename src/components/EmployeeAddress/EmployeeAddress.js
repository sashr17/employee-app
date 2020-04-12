import React from "react";

// Shared components
import Card from "../../shared/Card";

// Styles
import "./EmployeeAddress.scss";

const EmployeeAddress = ({ employee }) => {
  const formattedAddress = address => {
    const { street, suite, city, zipcode } = address;
    return [street, suite, city, zipcode].join(", ");
  };

  const displayAddress = addressList => {
    if (addressList && addressList.length > 0) {
      return addressList.map((address, index) => (
        <li key={index}>{formattedAddress(address)}</li>
      ));
    } else {
      return <li className="warn-msg">Employee needs to add address.</li>;
    }
  };

  return (
    <div className="EmployeeAddress">
      <Card>
        <div className="header">{employee.name}</div>
        <div className="meta">Address(s)</div>
        <ul className="description">{displayAddress(employee.address)}</ul>
      </Card>
    </div>
  );
};

export default EmployeeAddress;
