import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/utils.js';

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  if (isAuthenticated === null) {
    return
  }

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;