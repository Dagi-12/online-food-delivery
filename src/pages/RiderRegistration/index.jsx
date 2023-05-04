// import React from 'react'

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Button from "../../components/elements/Button";
// import { app } from "../../firebase-config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// export default function RiderRegistration() {
//   return (  //adjust the colors here for the registration form and manipulation
//         <div className="h-screen bg-white flex  items-center justify-center">
//             <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
//                 <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-blue-500 to-purple-500"></div>
//                 <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
//                     <h5 className="text-3xl ">Register</h5>
//                 <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
//                     <div>
//                         <label 
//                         htmlFor="name"
//                         className="block text-lg font-medium text-gray-400">Name</label>
//                         <input 
//                         {...register('name')}
//                         id="name"
//                         type="text"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
//                     <div>
//                         <label 
//                         htmlFor="email"
//                         className="block text-lg font-medium text-gray-400">Email</label>
//                         <input 
//                         {...register('email')}
//                         id="email"
//                         type="email"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
//                     <div>
//                         <label 
//                         htmlFor="password"
//                         className="block text-lg font-medium text-gray-400">Password</label>
//                         <input 
//                         {...register('password')}
//                         id="password"
//                         type="password"
//                         className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
//                         />
//                     </div>
                
//                     <Button  size="large">{loading ? "loading" : 'Register'}</Button>
//                 </form>
//                 <ToastContainer />
//                 </div>
//             </div>
//         </div>
//     )
  
// }
import React from 'react'
import Button from "../../components/elements/Button";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export const RiderRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
 let navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data)
  setLoading(true);
  try {
    const response = await fetch('http://localhost:4000/api/rider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('Rider created successfully');
      navigate("/");
      // Reset the form
    } else {
      console.error('Failed to create rider');
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};


  return (
    
    <div className="h-screen bg-white flex items-center justify-center " >
     
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-red-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
          <h5 className="text-3xl text-center">Rider Registration</h5>
          <form className="w-full space-y-6 h-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium text-orange-400">First Name</label>
              <input
                {...register('firstName',{ required: true })}
                id="firstName"
                type="text"
                // required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {errors.firstName && <p className="text-red-600">First Name is required</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium text-orange-400">Last Name</label>
              <input
                {...register('lastName',{ required: true })}
                id="lastName"
                type="text"
                // required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {errors.lastName && <p className="text-red-600">Last name is required</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-orange-400">Email</label>
              <input
                {...register('email', { required: true })}
                id="email"
                type="email"
                // required
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-600">Email is required</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-orange-400">Phone Number</label>
              <input
                {...register('phone', { required: true })}
                id="phone"
                type="tel"
                // required
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && <p className="text-red-600">Phone number is required</p>}
            </div>
            <div>
  <label htmlFor="vehicleType" className="block text-lg font-medium text-orange-400">Vehicle Type</label>
<div>
  <input 
    {...register('vehicleType' )}
    type="radio" 
    id="car" 
    name="vehicleType" 
    value="car" 
    className="mr-2"
    required
    defaultChecked
  />
  <label htmlFor="car" className="text-gray-500 mr-4">Car</label>
  
  <input 
    {...register('vehicleType')}
    type="radio" 
    id="bicycle" 
    name="vehicleType" 
    value="bicycle" 
    className="mr-2"
  />
  <label htmlFor="bicycle" className="text-gray-500 mr-4">Bicycle</label>
  
  <input 
    {...register('vehicleType')}
    type="radio" 
    id="motorcycle" 
    name="vehicleType" 
    value="motorcycle" 
    className="mr-2"
  />
  <label htmlFor="motorcycle" className="text-gray-500 mr-4">Motorcycle</label>
</div>

</div>
<Button  size="large">{loading ? "loading" : 'Register'}</Button>
           </form>
           </div>
           </div>
           </div>)}

