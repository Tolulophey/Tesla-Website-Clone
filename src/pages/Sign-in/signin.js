import React from 'react'
import './signin.css'
import logo from '../../assets/tesla-logo-png-20.png'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Signin = () => {
  return (
    <div className='sign-in'>
      <div className="sign-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="signin">
        <div className="signin-text">
         <h1 className='sign-text'>Sign In</h1>
        </div>
        <div className="form-info">
          <form>
              <label className='label-text'>Email Address</label><br/>
              <input type="text" name="email"/>
          </form>
          <Link to="/shop" className='next-btn'>Next</Link>
          <div className="password">
              <Link to="#">Forgot Email?</Link>
              <div></div>
              <Link to="#">Forgot Password?</Link>
          </div>

          <div className="linebreak">
              <div className='lines'>
                <hr/>
                <p>OR</p>
                <hr/>
              </div>
              <Link to="/sign-up" className='create-account'>Create Account</Link>
          </div>
        </div>
     </div>
     <Footer/>
     
      
    </div>
  )
}

export default Signin
