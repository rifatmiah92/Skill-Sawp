import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold">My Profile</h2>
      <div className="flex items-center gap-4 mt-4">
        {user?.photoURL ? <img src={user.photoURL} alt="avatar" className="w-20 h-20 rounded-full object-cover" /> : <div className="w-20 h-20 bg-gray-200 rounded-full" />}
        <div>
          <h3 className="font-semibold">{user?.displayName || "No name set"}</h3>
          <p className="text-sm">{user?.email}</p>
          <Link to="/profile/update" className="mt-3 inline-block bg-blue-600 text-white px-3 py-1 rounded">Update Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
