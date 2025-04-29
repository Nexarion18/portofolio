"use client";
import React from "react";
import SkillsSection from "./skills";
import Education from "./Education";
const About = () => {
    return (
        <div>
            <div id="about" className="mx-auto sm:w-full md:w-3/4 lg:w-4xl px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-left pb-5">ABOUT ME</h1>
                <p className="text-justify sm:text-justify md:text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, porro! Quasi quod recusandae soluta, error laudantium quidem rem fugit ducimus corrupti ratione vel expedita accusantium impedit voluptatibus sapiente? Officiis excepturi vero aliquam esse veniam! Itaque accusamus adipisci harum facilis alias voluptatibus corporis molestiae corrupti natus quis laboriosam id, dolorum vitae debitis illo hic quos fuga, aut quia, omnis dignissimos a porro. Omnis, nesciunt harum natus voluptate eaque officia, magnam incidunt, corrupti aliquid cumque numquam? Corrupti illo aperiam quidem, molestias minus, unde facere exercitationem voluptatem officia possimus quas? A rerum explicabo in rem alias cumque, delectus earum tenetur quia, maxime architecto!
                </p>
            </div>
            <div>
                <SkillsSection />
                <Education/>
            </div>
            <div>

            </div>
        </div>
    );
}
export default About;
