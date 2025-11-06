import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import PopularSkills from "./PopularSkills";
import HowItWorks from "./HowItWorks";
import TopProviders from "./TopProviders";
import Testimonials from "./Testimonials";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("failed to load skills", err));
  }, []);

  const slides = skills.slice(0, 4);

  return (
    <div>
      <div className="mb-8">
        <HeroSlider slides={slides} />
      </div>

      <PopularSkills skills={skills} />

      <TopProviders />

      <HowItWorks />

      <Testimonials />
    </div>
  );
};

export default Home;
