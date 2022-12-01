import React from 'react'
import './signup.css'
import logo from '../../assets/tesla-logo-png-20.png'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const Signin = () => {
  return (
    <div className='sign-up'>
      <div className="signup-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="signup">
        <div className="Signup-text">
         <h1 className='signup-text'>Create Account</h1>
        </div>
        <div className="signup-form-info">
          <form>
              <label className='label-text'>First Name</label><br/>
              <input type="text" name="email" required/>
              <label className='label-text'>Last Name</label><br/>
              <input type="text" name="email" required/>
              <label className='label-text'>Password</label><br/>
              <input type="text" name="email" required/>
              <label className='label-text'>Confirm password</label><br/>
              <input type="text" name="email" required/>
              <p className='agreement'>By continuing, I understand and agree to Tesla's Privacy Notice and Terms of Use for creating a Tesla Account</p>
          </form>
          <Link to="/sign-in" className='next-btn'>Next</Link>
        
        </div>
     </div>
     <Footer/>
     
      
    </div>
  )
}

export default Signin
