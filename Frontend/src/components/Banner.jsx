import React from 'react'
import {Link} from 'react-router-dom'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div  className='w-full order-2 md:order-1 md:w=1/2 mt-12 md:mt-10'> 
           <div className="space-y-12">
          <h1 className="text-4xl font-bold ">Hello, welcome to <span className="text-red-500">smart sell platform</span> of DMRC</h1>
          <p className="text-xl">A smart sell and buy app for DMRC staff is developed to streamline the procurement 
          and distribution of products and services exclusively for DMRC staff.
          </p>
          <br />
        <Link to="/about">
        <button className="btn btn-neutral bg-red-600 text-white rounded-full">Read More</button>
        </Link>
        </div>
        </div>
        <div  className='order-1 w-full md:w=1/2 mt-1'>
          <img src="../Banner.png" className="w-100 h-92 mt-12" alt="Banner image" />
        </div>
    </div>
    </>
  )
}

export default Banner
