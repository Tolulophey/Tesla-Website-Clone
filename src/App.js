import React from 'react'
import Home from './pages/Home/Home'
import SignIn from './pages/Sign-in/signin'
import SignUp from './pages/Sign-up/signup'
import Shop from './pages/Shop/shop'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ApparelPage from "./pages/Apparel/ApparelPage"
import ShopItemPage from './pages/ShopItem/shopItemPage'
import './index.css'
import ScrollToTop from './Components/scrollTop'





function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:name/:id" element={<ShopItemPage />}/>
            <Route path="/shop/:name" element={<ApparelPage />}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
