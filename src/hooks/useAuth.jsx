import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider"; // ✅ এই লাইনটা কাজ করবে এখন

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
