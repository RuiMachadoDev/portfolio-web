import React from "react";

import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import laravel from "../assets/laravel.png";


const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 3, src: reactImage, title: "React JS", style: "shadow-blue-600" },
    { id: 4, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
    { id: 5, src: vue, title: "Vue JS", style: "shadow-green-400" },
    { id: 6, src: laravel, title: "Laravel", style: "shadow-red-400" },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-14">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="pt-10">Two years of experience in developing various web and mobile platforms.</p>
          <p>These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 hover:bg-gray-700 hover:text-white duration-500 py-4 rounded-lg ${style} transform transition-transform`}
            >
              <img src={src} alt={`${title} icon`} className="w-20 mx-auto" />
              <p className="mt-4 font-semibold text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
