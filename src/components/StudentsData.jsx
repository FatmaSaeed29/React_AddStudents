import React, { useState } from 'react';
import './style/login.css';
import data from '../assets/data.gif';

export default function StudentsData({ addStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 2) {
      setError('Name must be longer than two letters.');
    } else if (age <= 18) {
      setError('Age must be greater than 18.');
    } else {
      setError('');
      addStudent({ name, age });
      setName('');
      setAge('');
    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1 className='mb-4 title'>Students Data</h1>
          {error && <p className="error text-danger">{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="btn mt-5 addStd">Add Student</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <img src={data} width="170%" className='dataImg' alt="data visualization" />
          </div>
        </div>
      </div>
    </div>
  );
}
