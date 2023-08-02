import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    localStorage.setItem("login", JSON.stringify(loginData));
    alert("Login successful! .");
    console.log(localStorage.getItem("loginData"));
  };

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
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
