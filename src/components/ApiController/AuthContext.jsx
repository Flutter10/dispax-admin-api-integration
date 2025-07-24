import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load userId and token from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedToken = localStorage.getItem('authToken');
    if (storedUserId && storedToken) {
      setUserId(storedUserId);
      setAuthToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login/registration
  const login = (userData, token) => {
    setUserId(userData.userId);
    setAuthToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('userId', userData.userId);
    localStorage.setItem('authToken', token);
  };

  // Function to handle logout
  const logout = () => {
    setUserId(null);
    setAuthToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ userId, authToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};