import React from 'react'
import logo from '../homecomponents/images/State_Flag.png'
function Section() {
  return (
    <div class="mt-4 p-5 bg-white text-center text-dark rounded"> 
    <div><img src={logo} alt="State_Flag" /></div> <br /> 
    <h1>Welcome to Wisconsin</h1>
    <p>Lorem ipsum...</p>
  </div>
  )
}

export default Section