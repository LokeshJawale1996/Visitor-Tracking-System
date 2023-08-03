import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(() => {
 const loginData = localStorage.getItem('lohinData')
 if(loginData) {
  setIsLoggedIn(true);
 }else{
  setIsLoggedIn(false)
 }
  },[])
  return (
    <div className="flex justify-around">
      <h1 className="font-bol text-3xl">Vistor Tracking System</h1>
      {isLoggedIn ? (
         <nav className="flex gap-8">
         <NavLink to="/" end>
           Home
         </NavLink>
         <NavLink to="/about">About</NavLink>
       </nav>
      ) : (
         <nav className="flex gap-8">
         <NavLink to="/" end>
           Home
         </NavLink>
         <NavLink to="/signup">Signup</NavLink>
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/about">About</NavLink>
       </nav>
      ) }
     
    </div>
  );
};

export default Header;
