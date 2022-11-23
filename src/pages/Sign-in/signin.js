import React from 'react'
import './signin.css'
import logo from '../../assets/tesla-logo-png-20.png'
import { Link } from 'react-router-dom'

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
          <button className='next-btn'>Next</button>
          <div className="password">
              <a href="https://www.google.com">Forgot Email?</a>
              <div/>
              <a href="https://www.google.com">Forgot Password?</a>
          </div>

          <div className="linebreak">
              <div className='lines'>
                <hr/>
                <p>OR</p>
                <hr/>
              </div>
              <Link to="/shop" className='create-account'>Create Account</Link>
          </div>
        </div>
     </div>
     
      
    </div>
  )
}

export default Signin
