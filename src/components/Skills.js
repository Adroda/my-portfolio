import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 xl:w-3/4">
          Richter: Die monster. You don't belong in this world! Dracula: It was
          not by my hand that I am once again given flesh. I was called here by
          humans who wish to pay me tribute. Richter: Tribute!?! You steal men's
          souls and make them your slaves! Dracula: Perhaps the same could be
          said of all religions... Richter: Your words are as empty as your
          soul! Mankind ill needs a savior such as you! Dracula: What is a man?
          (throws his wine glass to the floor) A miserable little pile of
          secrets. But enough talk... Have at you!
        </p>
      </div>
      <div className="flex flex-wrap lg:w4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
