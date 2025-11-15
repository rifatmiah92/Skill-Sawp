import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImage, FaStar, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  if (!skill) return null;

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 border border-gray-200 hover:shadow-2xl transform duration-300"
    >
      {/* Image Section */}
      {imageLoaded ? (
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-48 object-cover rounded-t-2xl"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
          <FaImage size={30} className="mr-2" />
          <p className="text-sm">Image failed to load</p>
        </div>
      )}

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">
          {skill.skillName}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {skill.description}
        </p>

        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center gap-2 text-gray-700">
            <FaUser className="text-indigo-500" />
            <span>{skill.providerName}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar />
            <span>{skill.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-indigo-600 font-semibold text-base">
            ${skill.price}
          </span>
          <Link
            to={`/skill/${skill.skillId}`}
            className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
