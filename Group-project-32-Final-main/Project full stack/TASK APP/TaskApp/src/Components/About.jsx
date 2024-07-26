import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Aboutcont from "./Aboutcont";
import "./style.css"; // Import CSS file

const Navbar = () => {
  const navigate = useNavigate();

  // JavaScript function to handle navigation
  const handleNavigate = (url) => {
    // You can customize this function to handle navigation as needed
    navigate(url);
  };
  
  return (
    <div>
    <div>
    <div className="navbar">
      <div className="navbar-brand">
        <span className="app-name">UTMS</span>
      </div>
      <div className="navbar-tabs">
        <button className="tab" onClick={() => handleNavigate("/")}>Home</button>
        <button className="tab" onClick={() => handleNavigate("/about")}>About</button>
        <button className="tab" onClick={() => handleNavigate("/gallory")}>Gallery</button>
      </div>
      <div className="navbar-right">
        <button type="button" className="btn btn-primary" onClick={() => handleNavigate('/employee_login')}>
          Employee
        </button>
        <button type="button" className="btn btn-success" onClick={() => handleNavigate('/adminlogin')}>
          Admin
        </button>
      </div>
    </div>
    <div className="space"></div>
    </div>    
    <Aboutcont/>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default Navbar;
