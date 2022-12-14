import React from 'react'
import "./Navbar.css"




export default function Navbar() {

    function handleSubmit(e) {
      e.preventDefault();
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };    




  

  return (
    <div className='navbar'>
      <div className="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">About</a>
  <a href="#contact">Service</a>
  <a href="#about">Contact</a>
  <a href="javascript:void(0);" class="icon" onClick={handleSubmit}>
    <i className="fa fa-bars"></i>
  </a>
</div>
      
    </div>
  )
  
}
