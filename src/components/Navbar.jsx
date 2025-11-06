import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all"
        >
          SkillSwap
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 border-b-2 border-blue-500 transition-all"
                : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 border-b-2 border-blue-500 transition-all"
                : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
            }
          >
            My Profile
          </NavLink>
        </div>

        {/* User/Auth buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover shadow-md hover:scale-105 transition-transform"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-500 hover:text-blue-500 transition-colors" />
                )}
                <motion.div
                  className="absolute top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded shadow-lg pointer-events-none"
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {user.displayName || user.email}
                </motion.div>
              </div>
              <button
                onClick={() => logOut()}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-lg shadow hover:from-pink-500 hover:to-red-500 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-1 rounded-lg shadow hover:from-teal-500 hover:to-green-400 transition-all"
              >
                Signup
              </Link>
            </>
          )}

          {/* Mobile toggle */}
          <button
            className="md:hidden ml-2"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t bg-white overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-4 gap-3">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                Home
              </NavLink>
              <NavLink
                to="/my-profile"
                onClick={() => setOpen(false)}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all"
              >
                My Profile
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
