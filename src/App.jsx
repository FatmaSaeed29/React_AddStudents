import React, { useState } from 'react';
import './App.css';
import StudentsData from './components/StudentsData';
import StudentTable from './components/StudentTable';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    if (students.some(student => student.name === newStudent.name)) {
      alert("Name must be unique.");
      return;
    }
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <StudentsData addStudent={addStudent} />
      <StudentTable students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
