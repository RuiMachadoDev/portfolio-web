import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import dotnet from "../assets/dotnet.png";
import nextjs from "../assets/nextjs.png";
import csharp from "../assets/csharp.png";
import reactNative from "../assets/reactNative.png";
import kotlin from "../assets/kotlin.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: figma,
      title: "Figma",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: dotnet,
      title: ".NET",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: csharp,
      title: "C#",
      style: "shadow-blue-700",
    },
    {
      id: 10,
      src: reactNative,
      title: "React Native",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
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
