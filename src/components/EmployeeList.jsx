import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, searchTerms }) {
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerms.toLowerCase()) ||
    employee.surname.toLowerCase().includes(searchTerms.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerms.toLowerCase())
  );

  return (
    <div>
      {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
