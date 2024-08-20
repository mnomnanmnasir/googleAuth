// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from './website/AuthContext';

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth(); 

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import useAuth from './website/UserContext';

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;