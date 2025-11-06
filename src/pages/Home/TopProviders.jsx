import React from "react";
import { motion } from "framer-motion";

const TopProviders = () => {
  const providers = [
    { id: 1, name: "Imran Khan", skill: "Python Tutor", rating: 4.9, color: "from-blue-100 via-blue-50 to-blue-100" },
    { id: 2, name: "Alex Martin", skill: "Guitar Instructor", rating: 4.8, color: "from-pink-100 via-pink-50 to-pink-100" },
    { id: 3, name: "Sara Hossain", skill: "English Coach", rating: 4.6, color: "from-green-100 via-green-50 to-green-100" },
    { id: 4, name: "Rashid Ahmed", skill: "Digital Marketing", rating: 4.7, color: "from-yellow-100 via-yellow-50 to-yellow-100" },
    { id: 5, name: "Lina Roy", skill: "Graphic Designer", rating: 4.8, color: "from-purple-100 via-purple-50 to-purple-100" },
  ];

  return (
    <section className="mt-16 py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {providers.map((provider, index) => (
          <motion.div
            key={provider.id}
            className={`p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 cursor-pointer bg-gradient-to-br ${provider.color}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
            <p className="text-sm md:text-base text-gray-700 mb-3">{provider.skill}</p>
            <p className="text-yellow-500 font-semibold">{provider.rating} ⭐</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopProviders;
