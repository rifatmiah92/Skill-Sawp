import React, { useEffect, useState } from "react";
import SkillCard from "../../components/SkillCard";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json") // Ensure skills.json is in public folder
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <p className="text-gray-700">
          1. Browse skills <br />
          2. View details and book a session <br />
          3. Connect with local providers and exchange skills
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-4">Top Rated Providers</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Imran Khan - Web Development</li>
          <li>Nadia Sultana - Graphic Design</li>
          <li>Abir Chowdhury - Python Developer</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-4">Extra Section</h2>
        <p className="text-gray-700">
          Join our community and learn new skills from local experts! Share your knowledge and grow together.
        </p>
      </section>
    </div>
  );
};

export default Home;
