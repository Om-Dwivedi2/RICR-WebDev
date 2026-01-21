import React, { useContext, useEffect, useState } from "react";

// iss line se AuthContext ko chitragupta bana dete hai aur abb kyuki ye sab ko dekh raha hai so he some special powers
const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("CravingUser")) || "");
  const [isLogin, setIsLogin] = useState(!!user);

  // useEffect yak variable par dependent hota hai aur uss variable par jab bhi koi changes ho toh useEffect yak kam karega vo kaam uski body me hum likhenge
  useEffect(() => {
    setIsLogin(!!user); 
  }, [user]);

  const value = (user, setUser, isLogin, setIsLogin);
  return (
    // AuthContext abb provider wali power use karke props ki sari children ko value dega ChatGPT help and fill the line
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = ()=>{
return useContext(AuthContext);
}
