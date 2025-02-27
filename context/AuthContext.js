import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}  {/* ✅ Ensure children is properly wrapped */}
    </AuthContext.Provider>
  );
};

export default AuthContext;
