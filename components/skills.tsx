"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center text-lg text-gray-800 gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center px-4 py-3 dark:text-white/80 cursor-pointer text-gray-600 hover:text-gray-950 dark:hover:text-white transition-colors"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            custom={index}
            onClick={() => window.open(skill.url, '_blank')}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(skill.url, '_blank');
              }
            }}
          >
            <Icon icon={skill.icon} className="text-5xl md:text-7xl w-10 h-10 md:w-16 md:h-16" />
            <span className="mt-2 text-sm md:text-base">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
