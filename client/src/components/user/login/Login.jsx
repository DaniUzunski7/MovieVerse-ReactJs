import "./login.css"

import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className="login-container">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
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
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    )
}