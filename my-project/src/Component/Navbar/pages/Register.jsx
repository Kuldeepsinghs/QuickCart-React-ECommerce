import React, { useContext, useState } from "react";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification , updateProfile} from "firebase/auth";
import { _Auth } from "../../../Backend/Backend";
import toast from "react-hot-toast";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";
import { Auth } from "../../../contextapi/AuthContext";


const Register = () => {
  let [showPassword, setShowPassword] = useState(false);
  let [showConfirmPassword, setShowConfirmPassword] = useState(false);


let userdata=useContext(Auth)
// console.log(datacontent);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

    
  }
  let navigate = useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
   try {
    if(formData.password.length && formData.confirmPassword.length <= 6){
        toast.error("Password must be at least 6 characters");
      setFormData({
        ...formData,
        password:"",
        confirmPassword:""
      })
      return
    }
    if(formData.password === formData.confirmPassword){
         console.log(formData);

    // Creating the user in FireBase
    const data= await createUserWithEmailAndPassword(_Auth,formData.email,formData.password)
    console.log(data);

    let emailveri = await sendEmailVerification(data.user)
    toast.success("Email verification sent")

    
    await updateProfile(data.user,{
          displayName:formData.name,
          photoURL:"https://www.bing.com/th/id/OIP.F7AAZ51YNslUUrejRKkDeQHaE1?w=325&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        })

    navigate('/login');
    }else{
      setFormData({
        ...formData,
        password:"",
        confirmPassword:""
      })
        console.log("Password Mismatch");
        
    }
   } catch (error) {
    console.log(error);
    toast.error(error.message.slice(22, error.message.length - 2) + ".");
    
   }

    
  };
  return (
    <div className="flex items-center justify-center h-[calc(100vh-75px)] bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword?"text":"password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-3 top-9" type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<RiEyeOffFill/>:<RiEyeFill/>}</button>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword?"text":"password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-4 top-9" type="button" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword?<RiEyeOffFill/>:<RiEyeFill/>}</button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
          <p className="text-center text-sm mt-4">
          i have an account? 
          <Link to="/Login"><span className="text-blue-500 cursor-pointer ml-1">
            Login
          </span></Link>
        </p>


        </form>
      </div>
    </div>
  );
};

export default Register;