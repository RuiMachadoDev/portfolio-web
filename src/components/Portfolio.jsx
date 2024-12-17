import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { year: "2022", title: "Curricular internship - Software Development (Frontend)", company: "CEiiA - Centre of Engineering and Product Development", description: "Web application development using React JS and Tailwind CSS", description2: "Mobile application development using Kotlin" },
  { year: "2023", title: "Hired - Software Developer (Frontend)", company: "CEiiA - Centre of Engineering and Product Development", description: "Development of web aplications using HandleBars JS framework with CSS", description2: "Development of web aplications using JavaScript with Tailwind CSS" },
  { year: "2024", title: "Hired - Software Developer (Frontend)", company: "CEiiA - Centre of Engineering and Product Development", description: "Development of digital platforms in C# (WebForms/WebServer and Blazor)" },
  { year: "2025", title: "Freelancer - Software Developer (Fullstack)", company: "Personal business", description: "Development of a web application in Vue JS and Laravel", description2: "Development of an online menu (QR Code) for a hotel restaurant in React JS and Tailwind CSS" },
];

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">My Career</h2>
        <p className="py-6">Check out some of my work and experiences.</p>

        <div className="relative pl-10">
          {/* Linha vertical com gradiente, cantos arredondados e altura ajustada */}
          <div className="absolute top-0 left-6 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 ml-12 relative"
            >
              {/* Bolas com Animação Pulsante */}
              <div className="absolute -left-10 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md border-4 border-gray-800 flex items-center justify-center animate-bounce">
                <span className="text-white text-sm font-semibold">{exp.year}</span>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ml-6">
                <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                <h4 className="text-lg text-gray-400">{exp.company}</h4>
                <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
                {exp.description2 && (
                  <p className="mt-1 text-gray-300 text-sm">{exp.description2}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
