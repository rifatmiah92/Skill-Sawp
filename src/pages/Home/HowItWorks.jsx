import React from "react";

const HowItWorks = () => (
  <section className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Browse</h4>
        <p className="text-sm">Find skills in your local area and compare providers.</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Connect</h4>
        <p className="text-sm">Message providers and book sessions.</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold">Review</h4>
        <p className="text-sm">Rate experiences to help others choose.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
