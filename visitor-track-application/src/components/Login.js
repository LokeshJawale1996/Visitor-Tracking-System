import React, { useState } from "react";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [validations, setValidations] = useState({
    email: true,
    password: true,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const isValidEmail = event.target.validity.valid;
      setValidations({ ...validations, [name]: isValidEmail });
    } else if (name === "password") {
      const isValidPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      setValidations({ ...validations, [name]: isValidPassword });
    }
  };
  const handleLogin = () => {
    // Fetch signup data from LocalStorage
    const storedSignupData = JSON.parse(localStorage.getItem("signupData"));

    if (
      loginData.email === storedSignupData.email &&
      loginData.password === storedSignupData.password
    ) {
      localStorage.setItem("loginData",JSON.stringify(loginData));
     
      alert("Login successful!");
      // Clear login form after successful login

      setLoginData({
        email: "",
        password: "",
      });
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };


  const getOutlineClass = (isValid) => {
    return isValid ? "border-green-500 border-2" : "border-red-500 border-2";
  };

  const isLoginDisabled =
    !validations.email ||
    !validations.password ||
    !loginData.email ||
    !loginData.password;

  return (
    <div className="w-96 mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={loginData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${getOutlineClass(
            validations.email
          )}`}
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${getOutlineClass(
            validations.password
          )}`}
        />
      </div>

      <button
        onClick={handleLogin}
        className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
          isLoginDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoginDisabled}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
