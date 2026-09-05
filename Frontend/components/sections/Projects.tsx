
"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  FolderCode,
  Database,
  Cpu,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import SlideUp from "@/components/animations/SlideUp";

const projects = [
  {
    id: "PRJ-001",
    title: "StyleCart",
    category: "E-COMMERCE SYSTEM",
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
    demo: "https://www.linkedin.com/posts/niroshan-pathmanathan-2057123bb_laravel-reactjs-fullstackdevelopment-activity-7487457609730596864-_aeQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZxY6UBlpv5Zr8C1ueuYuY1yHXTgbJUKH4",
    status: "OPERATIONAL",
  },

  {
    id: "PRJ-002",
    title: "Cloud-Based Vehicle Rental Management System",
    category: "CLOUD MANAGEMENT SYSTEM",
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
    demo: "https://www.linkedin.com/posts/niroshan-pathmanathan-2057123bb_laravel-azure-cloudcomputing-activity-7475594365411807232-R7Yh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZxY6UBlpv5Zr8C1ueuYuY1yHXTgbJUKH4",
    status: "DEPLOYED",
  },

  {
    id: "PRJ-003",
    title: "Mobile & Desktop Applications",
    category: "APPLICATION SUITE",
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
    demo: "https://www.linkedin.com/posts/niroshan-pathmanathan-2057123bb_flutter-dart-supabase-activity-7457528123434364928-oHp6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZxY6UBlpv5Zr8C1ueuYuY1yHXTgbJUKH4",
    status: "ARCHIVED",
  },

  {
    id: "PRJ-004",
    title: "RainyStack",
    category: "DIGITAL AGENCY / CMS",
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
    status: "OPERATIONAL",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background px-6 py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      {/* Technical background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)] [background-size:50px_50px]" />

      <SlideUp>
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <FolderCode className="h-4 w-4 text-cyan-400" />

              <p className="text-xs uppercase tracking-[5px] text-cyan-400/80">
                Project_Database
              </p>

              <span className="h-px w-16 bg-cyan-400/30" />
            </div>

            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  Mission Log
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  Selected software systems and applications developed across
                  frontend, backend, database, cloud, mobile, and desktop
                  environments.
                </p>
              </div>

              {/* Database status */}
              <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-xl">
                <Activity className="h-3.5 w-3.5 text-cyan-400" />

                <span className="font-mono text-[10px] uppercase tracking-[2px] text-cyan-300">
                  DATABASE ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* DATABASE FRAME */}
          <div className="relative">
            {/* Outer frame */}
            <div className="pointer-events-none absolute -inset-3 rounded-3xl border border-cyan-400/5" />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-black/20 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/35 hover:shadow-[0_0_45px_rgba(34,211,238,0.08)]"
                >
                  {/* Animated scan */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-none absolute inset-y-0 z-20 w-1/3 skew-x-[-20deg] bg-cyan-400/10"
                  />

                  {/* Corner markers */}
                  <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/40" />
                  <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/40" />
                  <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/40" />
                  <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/40" />

                  {/* Top system bar */}
                  <div className="flex items-center justify-between border-b border-cyan-400/10 bg-cyan-400/[0.02] px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />

                      <span className="font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/60">
                        {project.id}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-cyan-400/50">
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Category */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5">
                        <Database className="h-4 w-4 text-cyan-400" />
                      </div>

                      <span className="font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/60">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-cyan-300">
                        {project.title}
                      </h3>

                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-cyan-400/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                    </div>

                    {/* Description */}
                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tech separator */}
                    <div className="my-6 flex items-center gap-3">
                      <span className="font-mono text-[8px] uppercase tracking-[2px] text-cyan-400/40">
                        Tech_Stack
                      </span>

                      <span className="h-px flex-1 bg-cyan-400/10" />
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-cyan-400/10 bg-cyan-400/[0.025] px-2.5 py-1.5 font-mono text-[9px] text-cyan-300/70 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex items-center justify-between border-t border-cyan-400/10 pt-5">
                      <div className="flex items-center gap-5">
                        {/* GitHub */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="group/link inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-cyan-300"
                        >
                          <FaGithub className="h-4 w-4" />

                          <span>SOURCE</span>
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
                          className="group/link inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-cyan-300"
                        >
                          <ExternalLink className="h-4 w-4" />

                          <span>LIVE_DEMO</span>
                        </a>
                      </div>

                      <Cpu className="h-4 w-4 text-cyan-400/20 transition-colors group-hover:text-cyan-400/50" />
                    </div>
                  </div>

                  {/* Bottom data strip */}
                  <div className="flex items-center justify-between border-t border-cyan-400/10 bg-black/20 px-5 py-2.5 font-mono text-[8px] uppercase tracking-[1.5px] text-cyan-400/30">
                    <span>PROJECT_NODE</span>
                    <span>ACCESS_GRANTED</span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Database footer */}
            <div className="mt-8 flex flex-col gap-3 border border-cyan-400/10 bg-black/20 px-6 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/50">
                PROJECT_DATABASE :: 04 RECORDS
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/50">
                ALL SYSTEMS INDEXED
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/50">
                SYS_2026
              </span>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

