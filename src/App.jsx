import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Component/Navbar'
import Page1 from './Component/Page1'
import Country from './Component/Country';

function App() {
     
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
