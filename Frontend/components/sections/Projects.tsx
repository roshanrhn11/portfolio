"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SlideUp from "@/components/animations/SlideUp";

const projects = [
  {
    title: "StyleCart",
    description:
      "A full-stack fashion e-commerce platform with authentication, product management, shopping cart, checkout, and order processing.",
    tech: [
      "Laravel",
      "React.js",
      "REST API",
      "MySQL",
      "Tailwind CSS",
      "Sanctum",
    ],
    github: "https://github.com/roshanrhn11",
    demo: "#",
  },

  {
    title: "Cloud-Based Vehicle Rental Management System",
    description:
      "A Laravel-based vehicle rental management system with authentication, CRUD operations, booking workflows, MySQL database integration, and email notifications.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Microsoft Azure",
      "Eloquent ORM",
    ],
    github: "https://github.com/roshanrhn11",
    demo: "#",
  },

  {
    title: "Mobile & Desktop Applications",
    description:
      "A collection of academic mobile and desktop applications developed using Flutter, Firebase, SQLite, and C# Windows Forms with OOP, validation, and exception handling.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "SQLite",
      "C#",
      ".NET",
    ],
    github: "https://github.com/roshanrhn11",
    demo: "#",
  },

  {
    title: "RainyStack",
    description:
      "A modern digital agency portfolio and CMS platform built with Laravel, PHP, Bootstrap, and MySQL.",
    tech: [
      "Laravel",
      "PHP",
      "Bootstrap",
      "MySQL",
      "MVC",
    ],
    github: "https://github.com/roshanrhn11",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        px-6
        bg-background
      "
    >
      <SlideUp>
        <div
          className="
            max-w-6xl
            mx-auto
          "
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="
                text-sm
                uppercase
                tracking-[4px]
                text-muted-foreground
              "
            >
              Projects
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-4
                text-foreground
              "
            >
              Featured Work
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                text-muted-foreground
                leading-relaxed
              "
            >
              A selection of applications and software projects I have
              developed using modern frontend, backend, database, and cloud
              technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div
            className="
              grid
              md:grid-cols-2
              gap-8
            "
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  group
                  border
                  border-border
                  rounded-2xl
                  p-6
                  bg-background
                  hover:bg-accent/50
                  hover:-translate-y-1
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                {/* Project Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-foreground
                    group-hover:text-primary
                    transition-colors
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-muted-foreground
                    leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        border-border
                        text-sm
                        text-foreground
                        bg-background
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div
                  className="
                    flex
                    items-center
                    gap-5
                    mt-8
                  "
                >
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-foreground
                      hover:text-primary
                      transition-colors
                    "
                  >
                    <FaGithub size={18} />

                    <span>Code</span>
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel={
                      project.demo !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`View ${project.title} live demo`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-foreground
                      hover:text-primary
                      transition-colors
                    "
                  >
                    <ExternalLink size={18} />

                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

