import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logIn, googleLogin, facebookLogin, githubLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill in all fields.");
    }

    try {
      await logIn(email, password);
      toast.success("Welcome back! 👋");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  // Social logins
  const handleSocialLogin = (provider) => async () => {
    try {
      await provider();
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-8 rounded-3xl text-white"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center mb-6"
        >
          Welcome Back! 
        </motion.h2>

        <form onSubmit={submit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 placeholder-white focus:ring-2 focus:ring-pink-400 outline-none"
          />

          {/* Password */}
          <div className="relative">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 placeholder-white focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-2 text-white/80"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              // Pass email to forgot password page
              state={{ email: email }} 
              className="text-sm text-pink-300 hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 font-semibold rounded-lg py-2 shadow-lg hover:opacity-90 transition"
          >
            Login
          </motion.button>
        </form>

        <div className="text-center text-sm mt-6 text-white/80">Or continue with</div>

        {/* Social Logins */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mt-4"
        >
          <button
            onClick={handleSocialLogin(googleLogin)}
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaGoogle size={20} />
          </button>
          <button
            onClick={handleSocialLogin(facebookLogin)}
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaFacebook size={20} />
          </button>
          <button
            onClick={handleSocialLogin(githubLogin)}
            className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition"
          >
            <FaGithub size={20} />
          </button>
        </motion.div>

        <p className="text-center text-sm mt-6 text-white/80">
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-300 hover:underline font-medium">
            Sign up now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;