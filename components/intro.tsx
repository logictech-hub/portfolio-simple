"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [greeting, setGreeting] = useState("");

  const titles = [
    " full-stack developer",
    " frontend developer",
    " backend developer",
    " software engineer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  // sliding text code
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % titles.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [titles.length]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/profile1.png"}
              alt="profile"
              width={150}
              height={150}
              quality={95}
              priority={true}
              className="rounded-full border-4 h-30 w-30 border-white object-cover shadow-2xl"
            />
          </motion.div>
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-700 md:text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello ${greeting}, I'm Rivaldo Sabino.`}</span>{" "}
        {`I'm a`} <span className="font-bold">{`Senior Full Stack Engineer `}</span>
        {/* Sliding text code */}
        {/* <motion.span
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold inline-block  md:w-[400px]"
        >
          {titles[index]}
        </motion.span>{" "} */}
        {`with`} <span className="font-bold">{`over 7 years`}</span>
        {` of experience.`}
        {/* <span className="italic">{`sites & apps`}</span>. */}
        {/* {`. My focus is`} <span className="underline">{`React (Next.js)`}</span>. */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer relative "
          href="/resume.pdf"
          download
        >
          <span className="relative z-10">Download CV</span>
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition relative z-10" />
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 
            blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span className="absolute inset-0 rounded-full bg-gray-900 z-0" />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 pt-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-300 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 bg-white/10 text-white/60"
          href="https://www.linkedin.com/in/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-300 active:scale-105 transition cursor-pointer border border-black/10 bg-white/10 text-white/60"
          href="https://github.com/logictech-hub"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
