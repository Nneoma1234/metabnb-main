import React, { useState } from 'react'
import "./signup.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    
    <div className='signup-container'>
      <h1 className="py-3">Join Meta.</h1>
    <form onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          email,
          password,
          username,
        };
        console.log(formData);
        // loginUser(formData);
      }}
      className="d-flex flex-column gap-4 px-4">

      <label htmlFor="username">Username</label>
      
      <input onChange={(e) => {
            setUsername(e.target.value);
          }}
          className='border-0 border-bottom border-purple w-100'
          type="username"/>
          
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
          <button type="submit">SignUp</button>
    </form>
  </div>
  )
}

export default SignUp
