import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SkillDetails = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find((item) => item.treeId === parseInt(id));
        setSkill(foundSkill);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!skill) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading skill details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <img
          src={skill.image}
          alt={skill.commonName}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {skill.commonName}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{skill.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-indigo-600">
            Scientific Name: {skill.scientificName}
          </span>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
