/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState} from 'react';
import { auth } from './firebase.config';

// Create a context
export const AuthContext = createContext();
                                      
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
console.log(user) 


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
// create user  
const createUser = (email, password) => {
  setLoading(true) 
  return createUserWithEmailAndPassword(auth, email, password)
}


// Update user 
const updateUserProfile = (name, image) => {

 return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: image 
    })
    
}

const login = (email, password) => {

  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
} 

const loginGoogle = () => {
return signInWithPopup(auth, googleProvider)
} 

const loginGithub = () => { 
return signInWithPopup(auth, githubProvider)
}

const createUpdate = (fullName, email, photoURL) => {
  return updateProfile(auth.currentUser, {
       displayName: fullName,
       email: email,
       photoURL: photoURL
   });
}


const logout = () => {
  setLoading(false)
  setUser(null)
  return signOut(auth)
}

useEffect( () => {
  onAuthStateChanged(auth, (user) => {
      
        setUser(user)
        setLoading(false) 
     
    });
  
} ,[])


  const authInfo = {
    user, 
    setUser, 
    createUser,
    login, 
    logout, 
    loginGoogle,
    loginGithub,
    updateUserProfile, 
    loading, 
    createUpdate
 }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  ); 
};

// Custom hook to consume the AuthContext
// export const useAuth = () => useContext(AuthContext); 
