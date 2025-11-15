import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Browse",
      description: "Find skills in your local area and compare providers.",
      icon: "🔍",
    },
    {
      title: "Connect",
      description: "Message providers and book sessions.",
      icon: "💬",
    },
    {
      title: "Review",
      description: "Rate experiences to help others choose.",
      icon: "⭐",
    },
  ];z

  return (
    <section className="mt-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-7xl mb-5">{step.icon}</div>
            <h4 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
