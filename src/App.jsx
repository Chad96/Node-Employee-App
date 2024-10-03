import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { db } from './firebaseConfig';  // Firestore
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  useEffect(() => {
    const loadEmployeeData = async () => {
      const employeeCollection = collection(db, 'employees');
      const employeeSnapshot = await getDocs(employeeCollection);
      const employeeList = employeeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees(employeeList);
    };

    loadEmployeeData();
  }, []);

  return (
    <div className="App">
      <Header setSearchTerms={setSearchTerms} />
      <EmployeeList employees={employees} searchTerms={searchTerms} />
      <EmployeeForm setEmployees={setEmployees} />
    </div>
  );
}

export default App;
