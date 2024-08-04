import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Login from '../components/LogIn.jsx';

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center bg-[url('./public/dmrc.jpg')]  bg-cover">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="m-4 space-y-2">
              <span>Name</span>
              <br />
              <input type="email" placeholder="Enter your full name" className="w-80 px-3 py-1 border rounded-md outline-none" />
            </div>
            <div className="m-4 space-y-2">
              <span>Email</span>
              <br />
              <input type="email" placeholder="@dmrc.org" className="w-80 px-3 py-1 border rounded-md outline-none" />
            </div>
            <div className="m-4 space-y-2">
              <span>Employee id</span>
              <br />
              <input type="text" placeholder="Enter Employee-id" className="w-80 px-3 py-1 border rounded-md outline-none" />
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-600 duration-200 ">
                SignUp
              </button>
              <p> Have Account?
                <button className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                > Login
                </button>
                <Login />
              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Signup
