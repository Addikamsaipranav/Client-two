import React, { useState } from "react";
import "../Navbar/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Service from "../Services/Service";
import Contact from "../Contact/Contact"

function Navbar() {
  
  
  const [isMobile,setIsMobile] = useState(false);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
      
   <Router>
   <nav className="nav a navposition" >
  <Link to="/home" className="nav__brand">
  
    <h2><span>P</span>rudence</h2>
  </Link>
   <ul className={active} 
   onClick={()=>{
     setActive("nav__menu");
     setIcon("nav__toggler");

   }
  }
   >

     <li className="nav__item">
     <Link to="/home" className="nav__link "> Home</Link>
     </li>
     
     <li className="nav__item">
     <Link to="/about" className="nav__link"> About </Link>
     </li>

     <li className="nav__item">  
      <Link to="/services" className="nav__link">Services</Link>
      </li>

    


     <li className="nav__item">
     <Link to="/contact" className="nav__link"> Contact </Link>
     </li>

   </ul>
   <div onClick={navToggle} className={icon}>
     <div className="line1"></div>
     <div className="line2"></div>
     <div className="line3"></div>
   </div>
 </nav>
 <Routes>
    
       
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   </Router>
  );
}

export default Navbar;
