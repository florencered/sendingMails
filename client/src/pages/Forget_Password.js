import React from 'react'

const Forget_Password = () => {
  return (
    <div>
      <h1>Forget Password</h1>  
      <label for="email">Enter your valid email:</label><br/>
      <input placeholder='enter your email'type='email'/> <br/>
      <button type='button'>SUBMIT</button>
    </div>
  )
}

export default Forget_Password