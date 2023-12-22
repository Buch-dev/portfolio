"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        <span className="font-bold">Frontend developer</span> and{" "}
        <span className="font-bold">Technical writer</span> with a passion for
        creating beautiful and user-friendly web applications. I have a strong
        understanding of HTML, CSS, and JavaScript, and I am skilled in using
        modern frameworks and libraries such as React (Next.js), Vue (Nuxt.js).
        I am also proficient in using version control systems such as Git.{" "}
        <br /> I studied{" "}
        <span className="font-bold">
          Industrial and Production Engineering{" "}
        </span>
        at Nnamdi Azikiwe University, Awka, Nigeria. This gave me a strong
        foundation in <span className="font-bold">problem-solving</span>,{" "}
        <span className="font-bold">process optimization</span>, and{" "}
        <span className="font-bold">data analysis.</span> I use these skills in
        my work as a <span className="font-bold">frontend developer</span> and{" "}
        <span className="font-bold">technical writer</span> to create web
        appications that are both efficient and user-friendly. <br />
        I am passionate about building web applications that are both visually
        appealing and easy to use. I believe that good design is about more than
        just aesthetics; it is also about creating a user experience that is
        both efficient and enjoyable. I am always looking for new ways to
        improve my skills and knowledge, and I am excited to learn new
        technologies and frameworks. <br /> I am looking for opportunities to
        work on challenging and innovative projects, and I am confident that my
        skills and experience can be a valuable asset to any team.
      </p>
    </motion.section>
  );
}
