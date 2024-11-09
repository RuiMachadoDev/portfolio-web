import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { year: "2020", title: "Junior Developer", company: "Company A", description: "Developed UI components..." },
  { year: "2021", title: "Mid-Level Developer", company: "Company B", description: "Managed a team of 5..." },
  // Adicione mais experiências aqui
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-2">My Career</h2>
        <p className="py-6">Check out some of my work and experiences.</p>

        <div className="relative pl-10">
          {/* Linha vertical com gradiente e pontilhado */}
          <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500">
            <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse"></div>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-12 relative"
            >
              {/* Bolas com Animação Pulsante */}
              <div className="absolute -left-10 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg border-4 border-gray-800 flex items-center justify-center animate-bounce">
                <span className="text-white font-semibold">{exp.year}</span>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ml-6">
                <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
                <h4 className="text-xl text-gray-400">{exp.company}</h4>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
