import React from 'react'
import AmericanFlag from "../aboutcomponents/images/American_Flag.jpg"
function Section() {
  return (
    <div class="mt-4 p-5 bg-white text-center text-dark rounded">
    <h1>Entry Into The Union</h1>
    <br/>
    <div>           
        Wisconsin was admitted into the United States of America in the year 1848,
        the 30th state to enter the union
    </div><br/>
    <div><img src={AmericanFlag} alt="American_Flag"/></div>
</div>
  )
}

export default Section