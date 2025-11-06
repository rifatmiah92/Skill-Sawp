import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const items = [
    { id: 1, name: "Nadia", text: "Learned guitar in 3 months thanks to SkillSwap!", color: "from-pink-100 via-pink-50 to-pink-100" },
    { id: 2, name: "Rashed", text: "Great Python tutor, very patient.", color: "from-blue-100 via-blue-50 to-blue-100" },
    { id: 3, name: "Sofia", text: "The platform helped me find the best local tutors easily.", color: "from-green-100 via-green-50 to-green-100" },
    { id: 4, name: "Amin", text: "Highly recommend SkillSwap for anyone looking to learn new skills!", color: "from-yellow-100 via-yellow-50 to-yellow-100" },
  ];

  return (
    <section className="mt-16 py-12 bg-gradient-to-r from-purple-50 via-white to-purple-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`p-6 rounded-3xl shadow-lg flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer bg-gradient-to-br ${item.color}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4 font-medium">"{item.text}"</p>
            <p className="mt-auto text-gray-900 font-semibold text-sm md:text-base">— {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
