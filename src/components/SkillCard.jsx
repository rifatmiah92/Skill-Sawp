import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa";

const SkillCard = ({ skill }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  if (!skill) return null;

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Image */}
      {imageLoaded ? (
        <img
          src={skill.image}
          alt={skill.commonName}
          className="w-full h-48 object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
          <FaImage size={30} className="mr-2" />
          <p className="text-sm">Image failed to load</p>
        </div>
      )}

      {/* Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">
          {skill.commonName}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{skill.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-indigo-600 font-semibold">
            {skill.scientificName}
          </span>
          <Link
            to={`/skill/${skill.treeId}`}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
