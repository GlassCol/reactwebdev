import React from 'react'
import logo from"../peoplecomponents/images/Farley.jfif"
function Section() {
  return (
    <div class="mt-4 p-5 bg-white text-center text-dark rounded">
    <div><h1>Interesting People</h1></div>
    <br/>
    <div><h6>Chris Farley</h6></div>
    <div>Chris Farley, the bolved American actor was born in Madison Wisconsin</div><br/>
    <img src={logo} alt="Farley"/>
    <div></div>
</div>  )
}

export default Section