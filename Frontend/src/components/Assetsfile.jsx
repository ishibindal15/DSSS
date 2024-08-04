import React, { useState, useEffect } from 'react'
import list from "../list.json"
import Cards from "./Cards";
import {Link} from 'react-router-dom';

function Assetsfile() {

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 item-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">
              We're delightful to have you{" "}
              <span className="text-red-500">here !: )</span>
            </h1>
            <p className="mt-8 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam neque consectetur libero magni consequatur 
              architecto similique harum tempora labore soluta illum, sit voluptate, voluptas accusantium. Dicta voluptatem earum expedita!
            </p>
           <Link to="/">
           <button className="bg-red-600 text-white px-4 py-2 m-5 rounded-md hover:bg-red-600 duration-300">
              Back
            </button>
           </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          {list.data.map((item) => {
                return(
                  <Cards item={item} key={item.id} />
                )
          })}
          </div>
      </div>
    </>
  )
}

export default Assetsfile
