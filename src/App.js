import React from 'react'
// import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home'
import SignIn from './pages/Sign-in/signin'
import Shop from './pages/Shop/shop'


// import  LoginForm from './components/LoginForm';
// import './App.css';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MenApparel from './pages/Menapparel/menApparel'
import WomenApparel from './pages/WomenApparel/womenApparel'
import KidsApparel from './pages/KidsApparel/kidsApparel'
import ShopItemPage from './pages/ShopItem/shopItemPage'
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
            <Route path="/shop/men-apparel/:id" element={<ShopItemPage />}/>
            <Route path="/shop/men-apparel" element={<MenApparel />}/>
            <Route path="/shop/women-apparel" element={<WomenApparel />}/>
            <Route path="/shop/kids-apparel" element={<KidsApparel />}/>
            
        </Routes>
        {/* <Footer /> */}
      </Router>
  </div>
  )
}

export default App
