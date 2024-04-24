import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "./AuthProvider";


const Banner = () => {

  const {user} = useContext(AuthContext) 
console.log(user) 

const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    // Show the welcome message when user is logged in
    if (user) {
      setShowWelcomeMessage(true);
      
      // Hide the welcome message after 10 seconds
      const hideWelcomeMessageTimeout = setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 10000); 
    return () => {
        clearTimeout(hideWelcomeMessageTimeout);
      };
    }
  }, [user]);

    return (
        <div>
<div className="p-6">
{
  showWelcomeMessage && <h1>Welcome to our community <span className="font-bold text-red-500">{user.displayName}</span> ! </h1> 
}  
</div>

<div className=" mt-5 bg-base-200 rounded-xl">
  <div className="flex gap-3  items-center flex-col lg:flex-row-reverse">
    <img className="w-56 p-10 lg:p-0 pb-0 lg:py-4 lg:pr-16" src="/images/mendate.png" />
    <div className="space-y-5 p-5 lg:pl-16">
      <h1 className="mt-4 lg:mt-0 text-2xl lg:w-2/3 font-bold">Explore Worlds Within Pages: Freshen up your knowledge</h1>
      <Link to="/listed" className="btn text-white bg-[#23BE0A]">View The List</Link>
    </div>
  </div>
</div>




        </div>
    );
};

export default Banner;