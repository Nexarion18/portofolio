import React, { useState } from "react";
import { GlareCard } from "./ui/glare-card";
import Contact from "./Contact";
import Message from "./message";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
  const [showDownloadNotification, setDownloadNotification] = useState(false);
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "../images/fendisCV.jpg";
    link.download = "CV_FendiPermadi";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotification(true);

    setTimeout(() => {
      setDownloadNotification(false);
    }, 3000);
  };

  return (
    <div id="home" className="flex flex-col w-3/4 mx-auto items-center py-30 justify min-h-screen gap-3 md:flex md:flex-row md:mx-auto md:px-4 lg:mx-auto lg:px-4">
      <div className="mx-auto text-center md:text-left md:w-3/4 lg:w-4xl px-8 ">
        <h1 className="text-sm md:text-base text-gray-400">FENDI PERMADI</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Front End</h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">Developer</h1>
        <h1 className="mt-5 text-sm md:text-base text-gray-400">
          Undergraduate Information System Student at UPN "Veteran" Jakarta
        </h1>
        <div className="">
          <Contact />
        </div>
        <div className="inline-flex items-center justify-center bg-gray-200 text-gray-600 font-semibold h-12 px-6 py-2 w-auto rounded-lg hover:bg-gray-300 transform hover:scale-105">
          <button onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
        <div className="inline-flex items-center justify-center text-gray-600 font-semibold mt-4">
          <Message />
        </div>
        <AnimatePresence>
          {showDownloadNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-neutral-100 text-gray-500 text-base font-semibold rounded-lg shadow-xl z-50 w-auto md:w-fit max-w-sm text-center"
            >
              CV Berhasil diDownload
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="px-10 mt-5 mx-auto md:mb-24 md:mt-0 lg:mt-0">
        <GlareCard>
          <img src="../images/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-xl" />
        </GlareCard>
      </div>
    </div>
  );
}
export default Home;