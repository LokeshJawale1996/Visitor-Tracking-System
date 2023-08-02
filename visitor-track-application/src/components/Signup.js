
import React, { useState } from 'react';

const Signup= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    role: '',
    apartmentName: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    localStorage.setItem('signupData', JSON.stringify(formData));
    alert('Sign up successful! Data saved in localStorage.');
    console.log(localStorage.getItem('signupData'))
  };

  return (
    <div className="w-96 mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-40 mr-2 p-2 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-40 p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Role</option>
          <option value="security">Security</option>
          <option value="supervisor">Supervisor</option>
          <option value="apartmentHead">Apartment Head</option>
        </select>
      </div>
      {formData.role === 'apartmentHead' && (
        <div className="mb-4">
          <input
            type="text"
            name="apartmentName"
            placeholder="Apartment Name"
            value={formData.apartmentName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
      )}
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSignUp}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;