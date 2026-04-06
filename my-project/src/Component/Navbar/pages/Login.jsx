import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { _Auth } from "../../../Backend/Backend";
import toast from "react-hot-toast";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";

const Login = () => {

  const navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);
  const [formdat, setFormDat] = useState({
    email: "",
    password: ""
  });

  function handleinput(e) {
    setFormDat({
      ...formdat,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const login = await signInWithEmailAndPassword(
        _Auth,
        formdat.email,
        formdat.password
      );

      console.log(login);

      toast.success("Login successfully 🎉");

      navigate("/");

    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-75px)] bg-gray-900">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formdat.email}
              onChange={handleinput}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formdat.password}
              onChange={handleinput}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-3 top-9" type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <RiEyeOffFill /> : <RiEyeFill />}</button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?
          <Link to="/register" className="text-blue-500 ml-1 cursor-pointer">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;