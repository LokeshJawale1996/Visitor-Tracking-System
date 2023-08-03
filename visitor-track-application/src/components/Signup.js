import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "",
    apartmentName: "",
    password: "",
    confirmPassword: "",
  });

  const [validations, setValidations] = useState({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
    age: true,
    role: true,
    apartmentName: true,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const isValidEmail = event.target.validity.valid;
      setValidations({ ...validations, [name]: isValidEmail });
    } else if (name === "password" || name === "confirmPassword") {
      const isValidPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      setValidations({ ...validations, [name]: isValidPassword });
    } else if (name === "dob") {
      // Calculate age based on Date of Birth (dob)
      const dobDate = new Date(value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - dobDate.getFullYear();
      const isAbove18 = age >= 18;
      setValidations({ ...validations, age: isAbove18 });
    } else {
      const isValid = /^[a-zA-Z]+$/.test(value);
      setValidations({ ...validations, [name]: isValid });
    }
  };
  const handleSignUp = () => {
    // Check if all validations are true and passwords match
    if (
      validations.firstName &&
      validations.lastName &&
      validations.email &&
      validations.apartmentName &&
      validations.password &&
      validations.confirmPassword &&
      validations.age &&
      formData.password === formData.confirmPassword &&
      formData.role
    ) {
      localStorage.setItem("signupData", JSON.stringify(formData));

      alert("Sign up successful! Data saved in Localstorage.");
    } else {
      alert("Please enter valid information and ensure passwords match.");
    }

    console.log(localStorage.getItem("signupData"));
  };

  const firstNameOutline = validations.firstName
    ? "border-green-500 border-2"
    : "border-red-500 border-2";
  const lastNameOutline = validations.lastName
    ? "border-green-500 border-2"
    : "border-red-500 border-2";
  const emailOutline = validations.email
    ? "border-green-500 border-2"
    : "border-red-500 border-2";
  const passwordOutline =
    validations.password && formData.password === formData.confirmPassword
      ? "border-green-500 border-2"
      : "border-red-500 border-2";
  const confirmPasswordOutline =
    validations.confirmPassword &&
    formData.password === formData.confirmPassword
      ? "border-green-500 border-2"
      : "border-red-500 border-2";
  const ageOutline = validations.age
    ? "border-green-500 border-2"
    : "border-red-500 border-2";
  const roleOutline = validations.role
    ? "border-green-500 border-2"
    : "border-red-500 border-2";
  const apartmentNameOutline = validations.apartmentName
    ? "border-green-500 border-2"
    : "border-red-500 border-2";

  const isSignupDisabled =
    !validations.firstName ||
    !validations.lastName ||
    !validations.email ||
    !validations.apartmentName ||
    !validations.password ||
    !validations.confirmPassword ||
    !validations.age ||
    formData.password !== formData.confirmPassword ||
    !formData.role;

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
          onBlur={handleBlur}
          className={`w-40 mr-2 p-2 border rounded ${firstNameOutline}`}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-40 mr-2 p-2 border rounded ${lastNameOutline}`}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${emailOutline}`}
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${ageOutline}`}
        />
      </div>
      <div className="mb-4">
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${roleOutline}`}
        >
          <option value="">Select Role</option>
          <option value="security">Security</option>
          <option value="supervisor">Supervisor</option>
          <option value="apartmentHead">Apartment Head</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="apartmentName"
          placeholder="Apartment Name"
          value={formData.apartmentName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${apartmentNameOutline}`}
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${passwordOutline}`}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${confirmPasswordOutline}`}
        />
      </div>
      <button
        onClick={handleSignUp}
        className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
          isSignupDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSignupDisabled}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
