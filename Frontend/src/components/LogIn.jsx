import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";

function LogIn() {
  const { 
    register,
     handleSubmit,
      formState: { errors } 
    } = useForm();

  const onSubmit = data => console.log(data);
  const navigate = useNavigate();

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
   <div className="m-4 space-y-2">
      <span>Email</span>
      <br/>
      <input 
      type="email"
       placeholder="@dmrc.org" 
       className="w-80 px-3 py-1 border rounded-md outline-none"
       {...register("email", { required: true })} 
       />
       <br />
       {errors.email && <span className="text-sm text-red-500">This field is required</span>}
   </div>
   <div className="m-4 space-y-2">
      <span>Employee id</span>
      <br/>
      <input type="text" 
      placeholder="Enter Employee-id" 
      className="w-80 px-3 py-1 border rounded-md outline-none"
      {...register("text", { required: true })} 
      />
      <br/>
      {errors.text && <span className="text-sm text-red-500">This field is required</span>}
   </div>
    {/* Button */}
    <div className="flex justify-around mt-4">
      <Link to="/assets">
      <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-600 duration-200 ">
        Login
      </button>
      </Link>
      <p> Not registered? 
        <Link to="signup" className="underline text-blue-500 cursor-pointer">
        SignUp
        </Link> 
      </p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default LogIn
