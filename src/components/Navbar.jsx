import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SkillSwap
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>Home</NavLink>
            <NavLink to="/my-profile" className={({isActive}) => isActive ? 'text-blue-600' : 'text-gray-700'}>My Profile</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="relative group">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
                ) : (
                  <FaUserCircle size={36} />
                )}
                <div className="absolute top-11 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || user.email}
                </div>
              </div>
              <button onClick={() => logOut()} className="bg-red-500 text-white px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/signup" className="bg-green-500 text-white px-3 py-1 rounded">Signup</Link>
            </>
          )}

          {/* mobile button */}
          <button className="md:hidden ml-2" onClick={() => setOpen(s => !s)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-3">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/my-profile" onClick={() => setOpen(false)}>My Profile</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
