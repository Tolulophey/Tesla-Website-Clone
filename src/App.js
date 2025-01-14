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
import CartPage from './pages/Cart/CartPage'


export const CartContext = React.createContext()
export const UserContext = React.createContext()
export const NavContext = React.createContext()
function App() {
  const [navbar, setNavbar] = useState(false);
  const [authenticated, setAuthenticated] = useState(
  localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  if(!localStorage.getItem("authenticated")){
      localStorage.setItem("cart", JSON.stringify([{}]))
  }
  const [cart, setCart] = useState((JSON.parse(localStorage.getItem("cart"))) || [{}]);
  localStorage.setItem("cart", JSON.stringify(cart))
  const myCart = JSON.parse(localStorage.getItem("cart"))
  const handleRemove = (id) =>{
      const arr = myCart.filter((item) => item.id !== id);
      setCart(arr);
  };
  const handleChange = (item, d) =>{
      const ind = myCart.indexOf(item);
      const arr = myCart;
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
                  myCart: myCart, 
                  setCart: setCart, 
                  handleChange: handleChange,
                  handleRemove: handleRemove
                }}
        >
        <NavContext.Provider value={{navbar: navbar, setNavbar: setNavbar}}>
          <Routes>
              <Route path="/shop/:name/:id" element={<ShopItemPage />}/>
              <Route path="/cart" element={<CartPage />}/>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/shop/:name" element={<ApparelPage />}/>
              <Route path="/" element={<Home />}/>
          </Routes>
        </NavContext.Provider>
        </CartContext.Provider>
        <UserContext.Provider value={{authenticated: authenticated, setAuthenticated: setAuthenticated}}>
          <Routes>
              <Route path="/sign-in" element={<SignIn />}/>
              <Route path="/sign-up" element={<SignUp />}/>
          </Routes>
        </UserContext.Provider>
      </Router>
  </div>
  )
}

export default App
