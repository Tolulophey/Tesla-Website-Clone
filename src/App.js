import React, {useState} from 'react'
import Home from './pages/Home/Home'
import SignIn from './pages/Sign-in/signin'
import SignUp from './pages/Sign-up/signup'
import Shop from './pages/Shop/shop'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ApparelPage from "./pages/Apparel/ApparelPage"
import ShopItemPage from './pages/ShopItem/shopItemPage'
import './index.css'
import ScrollToTop from './Components/scrollTop'
import Cart from './pages/Cart/cart'


export const CartContext = React.createContext()
function App() {
  const [cart, setCart] = useState([{}]);
  const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
  };

  const handleChange = (item, d) =>{
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].quantity += d;

      if (arr[ind].quantity === 0) arr[ind].quantity = 1;
      setCart([...arr]);
  };
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <CartContext.Provider value={{
                  cart: cart, 
                  setCart: setCart, 
                  handleChange: handleChange,
                  handleRemove: handleRemove
                }}
            >
          <Routes>
              <Route path="/shop/:name/:id" element={<ShopItemPage />}/>
              <Route path="/cart" element={<Cart />}/>
          </Routes>
        </CartContext.Provider>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:name" element={<ApparelPage />}/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
