import React, { useEffect, useState } from 'react'
import Header from './components/common/heading/Header'
import Login from './components/login/Login';


import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
