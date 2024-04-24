/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import "./Nav.css"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import userDefaultPic from "../assets/user.png" 
  const Nav = () => 
  
  
  
  {
  
    const {user, logout} = useContext(AuthContext)

const navlinks = <>

<NavLink to="/" className={({isActive}) => isActive? "px-4 py-2 transition duration-300  rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Home</NavLink>
      
      <NavLink to="/listed" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Listed Books</NavLink>
      <NavLink to="/pages" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold" }>Pages to Read</NavLink>
      <NavLink to="/events" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Events</NavLink>
      
      {
        user? <NavLink to="/update" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Update Profile</NavLink> : <NavLink to="/about" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>About</NavLink>
      }


</>

    return (
        <div className=" shadow-xl sticky top-0 z-10">
            <div className="flex justify-between items-center bg-base-100  px-0 ">
  <div className="flex items-center">
    <div className="dropdown items-center">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navlinks}
      


      </ul>
    </div>
    <a className="font-extrabold text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Book Buzz</a>
  </div>
  <div className=" items-center hidden lg:flex">
    <ul className="menu menu-horizontal  items-center px-1">
      {navlinks}
      
    </ul>
  </div>
  <div className=" hidden lg:flex items-center gap-3">
    {user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div title={user.displayName}  className="w-10 border rounded-full">
        < img className="" alt="User" src={`${user? user.photoURL : userDefaultPic}`} />
      </div>
    </div> } 
    {user ?  <Link  onClick={logout} className="button bg-[#23BE0A]  ">Sign Out</Link> 
     : <div className="flex gap-3"> <Link to="/login"  className="button bg-[#23BE0A]  ">Sign In</Link> 
    <Link to="/register" className="button  bg-[#59C6D2]">Sign Up</Link> </div>  }
    
  </div>

</div>

<div className=" mt-2 flex  justify-center items-center lg:hidden gap-3">
    <Link to="/login" className="button  bg-[#23BE0A]">Sign In</Link>
    <Link to="/register" className="button  bg-[#59C6D2]">Sign Up</Link>
  </div>

 
        </div>
    );
};

export default Nav;