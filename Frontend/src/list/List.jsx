import React from 'react'
import Navbar from '../components/Navbar'
import Assetsfile from '../components/Assetsfile'
import Footer from '../components/Footer'

const List = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0"> 
      <Navbar />
      </div>
      <div className="min-h-screen ">
        <Assetsfile />
      </div>
      <Footer />
    </div>
  )
}

export default List
