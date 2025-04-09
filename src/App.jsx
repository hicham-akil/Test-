import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Component/Navbar'
import Page1 from './Component/Page1'
import Country from './Component/Country';
import Filter from './Component/Filter';
import CountriesApp from './Component/CountriesApp ';

function App() {
     
  return (
    <>
   <Router>
   <Navbar />
  
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/" element={ <CountriesApp/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
