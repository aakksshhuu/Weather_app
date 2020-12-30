import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
      <>
      <div className="container-fluid nav_bg">
          <div className='row'>     
           <nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
     
     <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/Service">Services</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to='/about'>About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="Contact">Contact</NavLink>
      </li>
      
      
    </ul>
  
  </div>
</nav>
</div></div>
   </>
    );
  }
  
  export default Navbar;