



import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {



  return (
    <div>


     
        <Routes >

          <Route element={<Home />} path='/' />


        </Routes>

     







    </div>
  )
}

export default App
