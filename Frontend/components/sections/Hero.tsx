"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        px-6
        pt-20
        pb-12
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Availability Badge */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              inline-flex
              items-center
              border
              rounded-full
              px-4
              py-2
              text-sm
              text-muted-foreground
              bg-background/50
              backdrop-blur-sm
            "
          >
            <span
              className="
                mr-2
                h-2
                w-2
                rounded-full
                bg-green-500
                animate-pulse
              "
              aria-hidden="true"
            />

            Available for Software Engineering Internship
          </motion.p>

          {/* Main Heading */}
          <h1
            className="
              mt-8
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              tracking-tight
              text-foreground
            "
          >
            Hi, I&apos;m Roshan

            <br />

            <span className="text-primary">
              Full Stack
              <br />
              Developer
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted-foreground
              max-w-xl
            "
          >
            I build modern, scalable web applications using Next.js, React,
            Node.js, Laravel and cloud technologies. Passionate about creating
            clean user experiences and powerful backend systems.
          </p>

          {/* Action Buttons */}
          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                gap-2
                bg-primary
                text-primary-foreground
                px-6
                py-3
                rounded-full
                font-medium
                transition-shadow
                hover:shadow-lg
              "
            >
              View My Work

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                gap-2
                border
                px-6
                py-3
                rounded-full
                font-medium
                hover:bg-accent
                transition-colors
              "
            >
              Download CV

              <Download
                size={18}
                aria-hidden="true"
              />
            </motion.a>
          </div>

          {/* Social Links */}
          <div
            className="
              flex
              items-center
              gap-6
              mt-10
            "
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/roshanrhn11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Roshan's GitHub profile"
              whileHover={{
                scale: 1.12,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                text-foreground
                transition-colors
                hover:text-primary
              "
            >
              <FaGithub
                size={30}
                aria-hidden="true"
              />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/niroshan-pathmanathan-2057123bb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Roshan's LinkedIn profile"
              whileHover={{
                scale: 1.12,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                text-foreground
                transition-colors
                hover:text-primary
              "
            >
              <FaLinkedin
                size={30}
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE AREA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            flex
            justify-center
            md:justify-end
          "
        >
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              w-72
              h-72
              sm:w-80
              sm:h-80
              md:w-96
              md:h-96
              rounded-3xl
              overflow-hidden
              border
              bg-muted/20
              shadow-xl
            "
          >
            {/* Profile Image */}
            <Image
              src="/profile.png"
              alt="Roshan - Full Stack Developer"
              fill
              priority
              sizes="
                (max-width: 640px) 288px,
                (max-width: 768px) 320px,
                384px
              "
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Subtle Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-background/20
                via-transparent
                to-transparent
                pointer-events-none
              "
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
