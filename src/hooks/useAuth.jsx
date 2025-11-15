import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const register = (email) => {
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, register, logOut };
};

export default useAuth;
