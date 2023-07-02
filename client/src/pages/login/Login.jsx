import React, { useState } from 'react'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    
    <div className='login-container'>
      <h1 className="py-3">Welcome back</h1>
      <form onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            email,
            password,
            // username,
          };
          console.log(formData);
          // loginUser(formData);
        }}
        className="d-flex flex-column gap-4 px-4">    
        <label htmlFor="email">Email</label>
        <input onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='border-0 border-bottom border-purple w-100'
            type="email"
            />
        <label htmlFor="password">Password</label>
        <input  onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='border-0 border-bottom border-purple w-100'
            type="password"/>
            <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login