/*componentsleri algılaması için ES7 uzantısı indirdik*/
import './App.css'; // sonradan ekledik olmak zorunda

import React from 'react'  //rfce yazıp tab tuşuna basarsak tweet componentinin react şeklini otomatik olaarak oluşturduk

function tweet(props) {
return (
    <div>
     <h1>Name:    {props.firstname}</h1>
     <p>Message:   {props.message}</p>
    </div>
  )
}

export default tweet

