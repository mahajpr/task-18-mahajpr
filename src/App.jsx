import React from 'react'
import EmployeeDirectory from './components/EmployeeDirectory';

function App() {
  const employees = [
    {id:1,name:"Arun"},
    {id:2,name:"Priya"},
    {id:3,name:"Rahul"},
  ];

  return (
    <div>
        <h1>Employee Directory</h1>

        {employees.map((employee)=>(
          <EmployeeDirectory
          key={employee.id}
          name ={employee.name}
          />
        ))}
    </div>
  );
}

export default App;