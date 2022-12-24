import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import './signup.css'
import logo from '../../assets/tesla-logo-png-20.png'
import Footer from '../../Components/Footer/Footer'
import { UserContext } from '../../App';

const SignUp = () => {
  const navigate = useNavigate();
  const {authenticated} = useContext(UserContext)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registered, setRegistered] = useState(true);
  useEffect(() => {
    if(authenticated){
        navigate("/shop")
      }
    if(password !== cPassword && cPassword !== ""){
        setPasswordMatch(false)
      } else{
        setPasswordMatch(true)
        setRegistered(true)
      }

  }, [password, cPassword, authenticated, navigate])
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    if(passwordMatch && password !== ""){
      const users = await localStorage.getItem("users") || []
      await localStorage.setItem("user", JSON.stringify([...users, user]))
      navigate("/sign-in")
    } else{
        setRegistered(false)
    }
  
  };
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
          <form onSubmit={handleSubmit}>
              <label className='label-text'>First Name</label><br/>
              <input 
              type="text" 
              name="firstname"
              onChange={(e) => setFirstName(e.target.value)} 
              // required
              />

              <label className='label-text'>Last Name</label><br/>
              <input 
              type="text" 
              name="lastname" 
              onChange={(e) => setLastName(e.target.value)} 
              // required
              />

              <label className='label-text'>Email</label><br/>
              <input 
              type="email" 
              name="email" 
              onChange={(e) => setEmail(e.target.value)} 
              // required
              />

              <label className='label-text'>Password</label><br/>
              <input 
              type="password" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)} 
              // required
              />

              <label className='label-text'>Confirm password</label><br/>
              <input 
              type="password" 
              name="cpassword"
              onChange={(e) => setCPassword(e.target.value)} 
              // required
              />
              <p className={passwordMatch ? "pass_match" : "pass_match false"}>passwords do not match</p>

              <p className='agreement'>By continuing, I understand and agree to Tesla's Privacy Notice and Terms of Use for creating a Tesla Account</p>
              <div className="submit">
                <input type="submit" className='submit-btn' value="SUBMIT" />
              </div>
          </form>
          <p className={registered ? "registered": "registered registered_not"}>kindly confirm your password entered</p>
        </div>
     </div>
     <Footer/>
     
      
    </div>
  )
}

export default SignUp
