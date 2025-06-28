"use client";
import React from "react";
import SkillsSection from "./skills";
const About = () => {
    return (
        <div>
            <div id="about" className="mx-auto sm:w-full md:w-3/4 lg:w-4xl px-4">
                <h1 className="text-3xl sm:text-4xl md:text-4xl text-left pb-5">About Me</h1>
                <p className="text-justify sm:text-justify md:text-justify">
                    I am currently pursuing a Bachelor's degree in Information Systems at UPN "Veteran" Jakarta,
                    where I am building a strong foundation in both frontend web development and enterprise systems.
                    My passion for frontend development, particularly using React, allows me to create intuitive,
                    responsive interfaces that deliver excellent user experiences. Alongside this, my academic focus on enterprise systems,
                    especially ERP platforms, enhances my ability to analyze business processes and design efficient,
                    technology-driven solutions. This combination of frontend expertise and enterprise system knowledge empowers me
                    to bridge the gap between technical solutions and business goals,
                    crafting digital experiences that meet both user and organizational needs.</p>
            </div>
            <div>
                <SkillsSection />
            </div>
            <div>

            </div>
        </div>
    );
}
export default About;
