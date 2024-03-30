import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


  
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import { toast } from "react-toastify";
import { createContext, useState } from "react";


import app from "./Components/firebase.config";
 export const UserContext = createContext(null); 

const Root = () => {

    const [user, setUser] = useState({})
    const auth = getAuth(app); 

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
    setUser(loggedUser) 
    toast.success("You are successfully signed in")
      })
      .catch(error => {
        console.log(error)   
      }) 
    }
    
    const handleGoogleSignOut = () => {
      signOut(auth)
      .then(result => {
        setUser(null);
        console.log(result); 
      })
      toast.success("You are signed out!")
    }

    return (
        <div className='max-w-4xl mx-auto'>
            <Nav user={user} handleGoogleSignIn={handleGoogleSignIn} handleGoogleSignOut={handleGoogleSignOut}></Nav>
            <UserContext.Provider value={{user}}>
            <Outlet></Outlet>
            </UserContext.Provider>
        </div>
    );
}; 

export default Root;