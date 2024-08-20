// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import {useAuth} from './UserContext'

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     accessToken: null,
//     refreshToken: null,
//     username: null
//   });


//   // Call refreshToken every 15 minutes
//   useEffect(() => {
//     const interval = setInterval(refreshToken, 15 * 60 * 1000); // 15 minutes in milliseconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ auth, login, refreshToken, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// website/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    accessToken: null,
    refreshToken: null,
    username: null
  });

  // ... rest of your code ...

  return (
    <AuthContext.Provider value={{ auth, login, refreshToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Define and export the useAuth hook