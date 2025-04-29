import { div, h1 } from "framer-motion/client";
import React from "react";
import { GlareCard } from "./ui/glare-card";

const Home = () => {
    return (
<div id="home" className="flex flex-col items-center justify-center min-h-screen px-6 py-10 gap-10 md:flex-row md:justify-start md:px-20 lg:px-40">
  <div className="text-center md:text-left sm:w-full md:w-3/4 lg:w-4xl px-8 ">
    <h1 className="text-sm md:text-base text-gray-400">FENDI PERMADI</h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Front End</h1>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Developer</h1>
    <h1 className="mt-5 text-sm md:text-base text-gray-400">
      Undergraduate Information System Student at UPN "Veteran" Jakarta
    </h1>
  </div>
  
  <div className="">
    <GlareCard>
      <img src="../images/Profile.png" alt="Profile" className="w-full h-full object-cover rounded-xl" />
    </GlareCard>
  </div>
</div>
      );
      }
export default Home;