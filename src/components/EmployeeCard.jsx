import React from 'react';

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <h2>{employee.name} {employee.surname}</h2>
      <p>{employee.position} - {employee.department}</p>
      <p>{employee.email}</p>
      <p>{employee.phoneNumber}</p>
      <p>{employee.startDate}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default EmployeeCard;
