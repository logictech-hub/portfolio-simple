"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-gray-500">
        I am a <span className="font-large">curious and solution-driven engineer</span> who thrives on solving complex challenges and building meaningful software. 
        Throughout my career, I have grown from <span className="font-large">hands-on development to mentoring and leading teams</span>, always fostering collaboration and continuous learning.
        I approach problems with adaptability and creativity, ensuring that both technology and teamwork drive impactful solutions.
        I believe that <span className="font-large">great software is built not just with code, but with innovation, shared knowledge, and a deep understanding of real-world needs.</span>
        {/* I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      {/* <p className="text-gray-700">
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>{`. I'm also
        learning how to play the guitar.`}
      </p> */}
    </motion.section>
  );
}