"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const skillsData = [
  {
    title: "Programming",
    items: ["C", "C++", "JavaScript", "Python"],
    key: "programming",
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Framer"],
    key: "frontend",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
    key: "backend",
  },
];

const Skills = () => {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="mt-44 w-full">
      <h1 className="text-3xl font-bold text-center">
        My <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">Skills</span>
      </h1>

      <div className="w-full h-[400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20  place-items-start">
        {skillsData.map(({ title, items, key }) => {
          const isOpen = expanded[key];
          return (
            <div
              key={key}
              className={`w-[300px] rounded-xl border p-5 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isOpen ? "max-h-[500px]" : "max-h-[80px]"
              }`}
            >
              <div
                className="text-xl font-semibold flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(key)}
              >
                {title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              <div className={`mt-4 space-y-1 ${!isOpen && 'opacity-0'} transition-opacity duration-300`}>
                {items.map((item, index) => (
                  <p
                    key={index}
                    className="text-center my-2 font-semibold text-xl text-black rounded-lg bg-yellow-400 w-full h-12 flex items-center justify-center"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
