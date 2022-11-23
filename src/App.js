import React from 'react'
// import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home'
import SignIn from './pages/Sign-in/signin'
import Shop from './pages/Shop/shop'


// import  LoginForm from './components/LoginForm';
// import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import './App.css';



function App() {

 
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/shop" element={<Shop />}/>
            
        </Routes>
        {/* <Footer /> */}
      </Router>
  </div>
  )
}

export default App
