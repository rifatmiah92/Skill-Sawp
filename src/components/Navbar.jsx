import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold">SkillSwap</Link>
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold" : "")}>Home</NavLink>
            <NavLink to="/my-profile" className={({ isActive }) => (isActive ? "font-bold" : "")}>My Profile</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <FaUserCircle size={28} />
              <span>{user.email}</span>
              <button onClick={logOut} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="bg-green-500 px-3 py-1 rounded">Signup</Link>
            </>
          )}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white text-gray-700 p-4">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
