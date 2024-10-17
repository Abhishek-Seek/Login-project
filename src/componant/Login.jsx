
"use client"

import { useState } from "react"
import { useNavigate, useRoutes } from "react-router-dom"
// import Api from "../utils/Api";
import { Button } from "antd";
import Link from "antd/es/typography/Link"


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const api_route = new Api()

  

  function forgot() {
    alert("hello world")
  }



  const Login = async () => {
    try {

      const api = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      
      if (!api.ok) {
        throw new Error(`HTTP error! status: ${api.status}`);
      }

      const data = await api.json();
      console.log(data);
      navigate('/dashboard');

    } catch (error) {
      console.error("Error during login:", error);
    }
  };



  return (
    <div className="h-screen w-screen flex justify-center items-center mx-auto bg-gray-100">
      <div className="w-full max-w-md bg-white text-center p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <div className="flex flex-col gap-4 mb-6">
          <label className="text-left font-medium">User ID *</label>
          <input
            type="text"
            required
            className="rounded-lg py-2 px-4 border border-gray-300"
            placeholder="Enter username"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <label className="text-left font-medium">Password *</label>
          <input
            type="password"
            required
            className="rounded-lg py-2 px-4 border border-gray-300"
            placeholder="Enter password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <button className="text-blue-600 hover:underline" onClick={forgot}>
            Forgot Password?
          </button>

          <Button type="primary" className='py-5 px-8 text-lg font-semibold' onClick={Login}>Login</Button>

        </div>

        <div className="flex justify-center items-center  mt-10">
          <h1>Don't have an account?</h1>
          <Link href="/signup">
            <Button type="link" className="text-lg" >Sign up</Button>
          </Link>

        </div>
      </div>
    </div>
  );

}

export default Login
