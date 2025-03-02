import React from "react";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Timeline from "@/components/Timeline";

const Homepage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-9/12">
          <About />
        </div>
        <div className="w-full mt-8">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
