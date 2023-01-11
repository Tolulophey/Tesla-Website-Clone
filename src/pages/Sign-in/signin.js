import React, {useState, useContext} from 'react'
import './signin.css'
import logo from '../../assets/tesla-logo-png-20.png'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { UserContext } from '../../App';

const Signin = () => {
  const navigate = useNavigate()
  const {setAuthenticated} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  const [error, setError] = useState(false)
  const goHome =() =>{
    if(window.location.pathname !== "/"){
      navigate("/")
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    // const form = document.querySelector("form")
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((user) => user.email === email);
    // form.submit()
    if (user && user.password === password) {
        localStorage.setItem("authenticated", true)
        localStorage.setItem("user", JSON.stringify(user))
        setAuthenticated(true)
        navigate("/shop");
    } else {
      setError(true)
    }
  }
  const next = (e)=>{
    e.preventDefault()
    document.getElementById("page1").style.left = "-100%"
    document.getElementById("page2").style.left = "0"
    setError(false)
  }
  const back = (e)=>{
    e.preventDefault()
    document.getElementById("page1").style.left = "0%"
    document.getElementById("page2").style.left = "100%"
    setError(false)
  }
  return (
    <div className='sign-in'>
      <div className="sign-logo" onClick={goHome}>
        <img src={logo} alt="logo" />
      </div>
      <div className="signin">
        <div className="signin-text">
         <h1 className='sign-text'>Sign In</h1>
        </div>
        <div className="form-info">
          <form method='post' onSubmit={handleSubmit}>
            <div id="page1">
              <div className="form-control">
                <label htmlFor='email'>Email Address</label>
                <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
              </div>
              <div className="button">
                <button onClick={next}>Next</button>
              </div>
            </div>
            <div id="page2">
              <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassowrd(e.target.value)}/>
              </div>
              <div className="button">
                <button onClick={back}>Back</button>
                <button type='submit'>Login</button>
              </div>
            </div>
          </form>
          {error && 
          <div className="error">
            The detail you entered is incorrect
          </div>}
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
