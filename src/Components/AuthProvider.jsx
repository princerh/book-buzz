/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState} from 'react';

// Create a context
export const AuthContext = createContext();
                                      
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    // Add your signInWithPopup logic here
  };

  const handleGoogleSignOut = () => {
    // Add your signOut logic here
  };

  return (
    <AuthContext.Provider value={{ user, handleGoogleSignIn, handleGoogleSignOut }}>
      {children}
    </AuthContext.Provider>
  ); 
};

// Custom hook to consume the AuthContext
// export const useAuth = () => useContext(AuthContext); 
