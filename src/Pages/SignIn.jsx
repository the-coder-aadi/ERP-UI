import { useNavigate } from "react-router-dom"
import "../styles/signin.css";
import { useState } from "react";

function SignIn() {

    let navigate = useNavigate()
    return(
        <div className="login-wrapper">
       
        <div className="Login-Box">
            <div className="heading">
<h1>Vidya Mono</h1>
<p>Modern Educational ERP</p>
</div>

      <div className="input-group">
        <label htmlFor="institutionId">Institution ID or Email</label>
        <input type="text" id="institutionId" placeholder="Enter your ID or email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password"  />
        <div className="fp">
        <p className="forgot-password">Forgot Password?</p>
        </div>
      </div>

      <button className="signin-btn" onClick={()=> navigate("/profile")}>Sign in</button>

<div className="aib">

      <p className="access-info">
          Contact your administrator if you don't have
           access
      </p>
</div>
        </div>
         </div>
    )
}
export default SignIn