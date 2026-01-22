import React, { useContext, useEffect, useState } from "react";

// iss line se AuthContext ko chitragupta bana dete hai aur abb kyuki ye sab ko dekh raha hai so he has some special powers
const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("CravingUser")) || "",
  );
  const [isLogin, setIsLogin] = useState(!!user);

  // useEffect yak variable par dependent hota hai aur uss variable par jab bhi
  // koi changes ho toh useEffect yak kam karega vo kaam uski body me hum likhenge
  useEffect(() => {
    setIsLogin(!!user);
  }, [user]);

  const value = { user, setUser, isLogin, setIsLogin };
  return (
    // AuthContext abb provider wali power use karke props ki sari children ko value dega
    // matlab jo bhi component AuthProvider ke andar wrap hoga
    // wo directly user, isLogin aur unko change karne wale functions use kar sakta hai
    // bina props pass kiye
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
