import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h2>
          
          <p className="text-lg sm:text-xl mt-4 text-gray-300 pt-8">
            Graduated in <span className="text-white font-semibold">Communication and Multimedia</span>,
            I developed a passion for <span className="text-white font-semibold">web and mobile development</span>.
            I stand out for my persistence and constant dedication to improving my skills.
          </p>
          
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            Software development allows me to showcase my creativity and motivation. Here, you’ll find a deeper insight into
            my <span className="text-white font-semibold">work</span> and <span className="text-white font-semibold">skills</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
