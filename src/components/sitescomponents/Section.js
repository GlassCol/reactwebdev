import React from 'react'
import Lincoln from '../sitescomponents/images/Lincoln.jfif'
import Republican from '../sitescomponents/images/Republican.png'

export default function Section() {
  return (
    <div class="mt-4 p-5 bg-white text-center text-dark rounded">
    <div><h1>Interesting Sites</h1></div>
    <br/><br/>
    <div><h3>Birthplace of the republican party</h3></div><br/>
    <div><img src={Republican} alt="repLogo"/></div><br/>
    <div>The Republican party was founded in Ripon Wisconsin by Abraham Lincoln</div><br/>
    <div><img src={Lincoln} alt="Lincoln"/></div>
</div>
  )
}
