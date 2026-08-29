"use client";

import { motion } from "framer-motion";


const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "Laravel",
  "TypeScript",
  "AWS",
  "Azure",
  "Docker",
];


export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-12">

      {technologies.map((tech, index) => (

        <motion.div
          key={tech}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.1,
          }}
          className="
          px-4
          py-2
          rounded-full
          border
          border-border
          bg-background/50
          backdrop-blur
          text-sm
          text-foreground
          "
        >
          {tech}

        </motion.div>

      ))}

    </div>
  );
}