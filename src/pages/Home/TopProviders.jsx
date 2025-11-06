import React from "react";

const TopProviders = () => (
  <section className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Top Rated Providers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Imran Khan</h3>
        <p className="text-sm">Python Tutor — Rating 4.9</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Alex Martin</h3>
        <p className="text-sm">Guitar Instructor — Rating 4.8</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Sara Hossain</h3>
        <p className="text-sm">English Coach — Rating 4.6</p>
      </div>
    </div>
  </section>
);

export default TopProviders;
