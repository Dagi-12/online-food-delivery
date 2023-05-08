import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Register=()=> {
  let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    //loading state wehn the account is creacted
    const [loading, setLoading] = useState(false);
 
    const onSubmit = async (data) => {
  setLoading(true);
  const authentication = getAuth();

  try {
    // create user in Firebase Authentication
    const response = await createUserWithEmailAndPassword(
      authentication,
      data.email,
      data.password
    );
    const uid = response.user.uid;

    // store user ID in session storage
    sessionStorage.setItem("User Id", uid);
    sessionStorage.setItem(
      "Auth token",
      response._tokenResponse.refreshToken
    );
    window.dispatchEvent(new Event("storage"));

    // create user in MongoDB
    const apiResponse = await fetch("http://localhost:4000/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        _id: uid,
      }),
    });

    if (apiResponse.status === 200) {
      setLoading(false);
      toast.success("Account created successfully!🎉", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } else {
      console.log(await apiResponse.json());
    }
  } catch (error) {
    setLoading(false);
    if (error.code === "auth/email-already-in-use") {
      toast.error("Email Already In Use");
    } else {
      console.log(error);
    }
  }
};

                      
    return (
                         //adjust the colors here for the registration form and manipulation
        <div className="h-screen bg-white flex  items-center justify-center">
            <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
                    <h5 className="text-3xl ">Register</h5>
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-lg font-medium text-gray-400">Name</label>
                        <input 
                        {...register('name')}
                        id="name"
                        type="text"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-400">Email</label>
                        <input 
                        {...register('email')}
                        id="email"
                        type="email"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                    <div>
                        <label 
                        htmlFor="password"
                        className="block text-lg font-medium text-gray-400">Password</label>
                        <input 
                        {...register('password')}
                        id="password"
                        type="password"
                        className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                        />
                    </div>
                
                    <Button  size="large">{loading ? "loading" : 'Register'}</Button>
                </form>
                <ToastContainer />
                </div>
            </div>
        </div>
    )
  
}
export default Register