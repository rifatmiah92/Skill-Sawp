import React from "react";

const Testimonials = () => {
  const items = [
    { id: 1, name: "Nadia", text: "Learned guitar in 3 months thanks to SkillSwap!" },
    { id: 2, name: "Rashed", text: "Great Python tutor, very patient." },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(i => (
          <div key={i.id} className="bg-white p-4 rounded shadow">
            <p className="text-sm">"{i.text}"</p>
            <p className="mt-3 text-sm font-semibold">— {i.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
