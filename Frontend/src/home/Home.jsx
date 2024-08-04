import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Assets from '../components/Assets';


function Home() {
  return (
    <div>
       <Navbar />
       <Banner />
       <Assets />
       <Footer />
    </div>
  )
}

export default Home
