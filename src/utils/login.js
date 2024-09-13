import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./auth/firebase"; // Adjust the import based on your file structure
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success message
      navigate("/home"); // Redirect to the home page or another route upon successful login
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-signup">
      <h2>Login</h2>
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <p style={{ color: "black" }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "black" }}>
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default Login;
