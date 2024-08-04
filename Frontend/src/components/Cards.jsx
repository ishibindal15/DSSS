import React from 'react'
import list from "../list.json";

function Cards(props) {
  return (
    <>
      <div className='mt-4 m-3 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img
      src={props.item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.item.name}
      <div className="badge bg-red-600 text-white h-7">{props.item.category}</div>
    </h2>
    <p>{props.item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs. {props.item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-lg hover:bg-red-600 hover:text-white duration-200 ">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
