import React from 'react';
import './style/studentTable.css';

export default function StudentTable({ students, deleteStudent }) {
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button 
                  className='btn btn-outline-danger text-light deleteStd text-center'
                  onClick={() => deleteStudent(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
