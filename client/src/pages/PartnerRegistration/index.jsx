import React from 'react'
import Button from "../../components/elements/Button";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function PartnerRegistration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
 let navigate = useNavigate();

 const onSubmit = async (data) => {
    console.log(data)
  setLoading(true);
  try {
    const response = await fetch('http://localhost:4000/api/partner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
     
      navigate(`/partner-sucess?restaurantName=${data.restaurantName}`);
      // Reset the form
    } else {
      console.error('Failed to register partner');
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};

  return (
   <div className=' m-50   '>
    <div className="h-full bg-white flex items-center justify-center mb-10 mt-10 " >
     
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-orange-500 to-green-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
          <h5 className="text-3xl text-center text-green-500 font-bold pb-3 border-b-2 border-emerald-600 mb-5">Partner Registration Application</h5>
          <form className="w-full space-y-6 h-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="restaurantName" className="block text-lg font-medium text-orange-400">Restaurant Name</label>
              <input
                {...register('restaurantName',{ required: true })}
                id="restaurantName"
                type="text"
                placeholder='your institution name'
                required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {/* {errors.restaurantName && <p className="text-red-600">Restaurant Name is required</p>} */}
            </div>
            <div>
              <label htmlFor="location" className="block text-lg font-medium  text-orange-400">Location</label>
              <input
                {...register('location',{ required: true })}
                id="location"
                type="text"
                placeholder='Location'
                required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {/* {errors.location && <p className="text-red-600">Last name is required</p>} */}
            </div>
            <div>
              <label htmlFor="deliveryAreas" className="block text-lg font-medium text-orange-400">Delivery Areas</label>
              <textarea
                {...register('deliveryAreas', { required: true })}
                id="deliveryAreas"
                type="TEXT"
                required
                placeholder='Locations you are willing to rovide your products'
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 `}
              />
              {/* {errors.email && <p className="text-red-600">area is required</p>} */}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-orange-400">Email</label>
              <input
                {...register('email', { required: true })}
                id="email"
                type="email"
                required
                placeholder='email'
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 `}
              />
              {/* {errors.email && <p className="text-red-600">Email is required</p>} */}
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-orange-400">Phone Number</label>
              <input
                {...register('phone', { required: true })}
                id="phone"
                type="tel"
                required
                placeholder='Phone No.'
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 $`}
              />
              {/* {errors.phone && <p className="text-red-600">Phone number is required</p>} */}
            </div>
            
 <div>
   <label htmlFor="recentAchivements" className="block text-lg font-medium text-orange-400">Recent Achivements</label>
              <textarea
                {...register('recentAchivements',{ required: true })}
                id="recentAchivements"
                type="text-area"
                placeholder='Write about your achivements that your instiution has made so far .'
                required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {/* {errors.recentAchivements && <p className="text-red-600">About you is required</p>} */}
            </div>


<Button  size="large">{loading ? "loading" : 'Register'}</Button>
           </form>
           </div>
           </div>
           </div>
           </div>
  )
}
