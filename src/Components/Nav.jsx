/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import "./Nav.css"

  const Nav = ({user, handleGoogleSignIn, handleGoogleSignOut}) => {
  



    return (
        <div className="pt-1">
            <div className="flex justify-between items-center bg-base-100  px-0 ">
  <div className="flex items-center">
    <div className="dropdown items-center">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/" className={({isActive}) => isActive? "px-4 py-2 transition duration-300  rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Home</NavLink>
      <NavLink to="/listed" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Listed Books</NavLink>
      <NavLink to="/pages" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold" }>Pages to Read</NavLink>
      <NavLink to="/events" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Events</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>About Us</NavLink> 
      


      </ul>
    </div>
    <a className="font-extrabold text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Book Buzz</a>
  </div>
  <div className=" items-center hidden lg:flex">
    <ul className="menu menu-horizontal  items-center px-1">
      <NavLink to="/" className={({isActive}) => isActive? "px-4 py-2 transition duration-300  rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Home</NavLink>
      <NavLink to="/listed" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Listed Books</NavLink>
      <NavLink to="/pages" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold" }>Pages to Read</NavLink>
      <NavLink to="/events" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>Events</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive? "px-4 py-2 transition duration-300 rounded-lg font-bold text-[#23BE0A] border border-[#23BE0A]":"px-4 py-2 font-bold"}>About Us</NavLink>
      {user && user.photoURL ? <img className="h-9 ml-5 w-9 rounded-full" src={user.photoURL} alt="" /> : null} 
    </ul>
  </div>
  <div className=" hidden lg:flex gap-3">
    {user ? <Link onClick={() => handleGoogleSignOut()} className="button  bg-[#23BE0A]">Sign Out</Link> : <Link onClick={() => handleGoogleSignIn()} className="button  bg-[#23BE0A]">Sign In</Link> }
    <Link className="button  bg-[#59C6D2]">Sign Up</Link>
  </div>

</div>

<div className=" mt-2 flex justify-center items-center lg:hidden gap-3">
    <Link className="button  bg-[#23BE0A]">Sign In</Link>
    <Link className="button  bg-[#59C6D2]">Sign Up</Link>
  </div>

 
        </div>
    );
};

export default Nav;