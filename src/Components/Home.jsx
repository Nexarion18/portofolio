import React from "react";
import { GlareCard } from "./ui/glare-card";
import Contact from "./Contact";
import Message from "./message";

const Home = () => {
  return (
    <div id="home" className="flex flex-col w-3/4 sm:flex-row items-center py-30 justify min-h-screen gap-3 md:flex-row justify-start px-20 lg:mx-auto px-4">
      <div className="mx-auto text-center md:text-left sm:w-full md:w-3/4 lg:w-4xl px-8 ">
        <h1 className="text-sm md:text-base text-gray-400">FENDI PERMADI</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Front End</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Developer</h1>
        <h1 className="mt-5 text-sm md:text-base text-gray-400">
          Undergraduate Information System Student at UPN "Veteran" Jakarta
        </h1>
        <div className="">
          <Contact />
        </div>
        <div className="flex flex-col inline-flex items-center justify-center bg-gray-200 text-gray-600 font-semibold h-12 px-6 py-2 w-auto rounded-lg hover:bg-gray-300 transform hover:scale-105">
          <button><a href="../images/fendisCV.jpg" download="CV_FendiPermadi"></a>Download CV</button>
        </div>
        <div className="flex flex-col inline-flex items-center justify-center pt-5 ">
        <Message />
        </div>

      </div>
      <div className="px-10 mt-5 md:mb-24 md:mt-0 lg:mt-0 mx-auto">
        <GlareCard>
          <img src="../images/Profile.png" alt="Profile" className="w-full h-full object-cover rounded-xl" />
        </GlareCard>
      </div>
    </div>
  );
}
export default Home;