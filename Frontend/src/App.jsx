import React from 'react';
import "./index.css";
import Home from './home/Home'
import Assetsfile from './components/Assetsfile'
import List from './list/List'
import {Route, Routes} from "react-router-dom"
import Signup from './components/Signup';
import About from './about/About'

function App() {
  return  (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<List />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    
    </>
  )
}

export default App