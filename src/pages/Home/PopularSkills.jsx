import React, { useEffect, useState } from "react";
// Inside src/pages/Home/PopularSkills.jsx
import SkillCard from "../../components/SkillCard";


const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h2 className="text-2xl font-bold mb-6">Popular Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.treeId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
