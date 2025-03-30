import { Link, useNavigate } from "react-router";
import "./login.css"

import { useState } from "react";

export default function Login({
  onLogin
}){
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAction = (formData) => {
      const email = formData.get('email');
      console.log(email);
      
      onLogin(email);
      
      navigate('/movies');
    }
    
    return (
        <div className="login-container">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <form className="form" action={loginAction}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
          <p className="redirect-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    )
}