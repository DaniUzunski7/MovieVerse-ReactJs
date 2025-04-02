import { useNavigate } from 'react-router';
import './register.css'

import { useContext, useState } from "react"
import { toast } from 'react-toastify';
import { showErrorToast, showSuccessToast } from '../../toasts/ShowToast';
import { useRegister } from '../../../api/authAPI';
import { UserContext } from '../../../context/UserContext';

export default function Register(){
    const navigate = useNavigate();

    const {register} = useRegister();
    const {loginHandler} = useContext(UserContext)
  
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");

    const registerHandler = async (formData) => {
      const {email, userName, password, rePassword} = Object.fromEntries(formData)
      
      if(password !== rePassword){
        showErrorToast('Passwords should match');
        return
      }

      try {
        const serverData = await register(email, userName, password);
        
        loginHandler(serverData)
        
        showSuccessToast('Register successful');
        navigate('/');
      
      } catch (error) {
        showErrorToast(error.message);  
      }
    }

    return (
        <div className="register-container">
        <div className="form-container">
          <h2 className="form-title">Register</h2>
          <form className="form" action={registerHandler}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                placeholder="Enter your email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userName">User name</label>
              <input
                type="userName"
                id="userName"
                name="userName"
                placeholder="Enter your user name"
                className="form-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rePassword">Confirm Password</label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                placeholder="Confirm your password"
                className="form-input"
              />
            </div>
            <button type="submit" className="btn-submit">
              Register
            </button>
          </form>
          <p className="redirect-text">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    )
}