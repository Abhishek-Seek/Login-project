"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const formvalues = { name, email, password };

  const Signup = async () => {
    try {
      const api = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      console.log(api);

      if (!api.ok) {
        throw new Error(`HTTP error! status: ${api.status}`);
      }

      const data = await api.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleChange = (type, e) => {
    if (type === "name") {
      setName(e.target.value);
    }
    if (type === "email") {
      setEmail(e.target.value);
    }
    if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formvalues));
    setIsSubmit(true);
    console.log("Form Data Submitted:", formvalues);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      Signup(); 
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.name) {
      errors.name = "Name is required";
    } else if (value.name.length < 4) {
      errors.name = "name must be at least 6 characters long";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <label  htmlFor="name" className="block text-gray-700 mb-2">
            Name

          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => handleChange("name", e)}
            className="w-full px-3 py-2 border rounded"
          />

          <p className="text-red-500">{formError.name}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleChange("email", e)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <p className="text-red-500">{formError.email}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => handleChange("password", e)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <p className="text-red-500">{formError.password}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={Signup}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
