
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  Server,
  Terminal,
  Activity,
  ShieldCheck,
} from "lucide-react";
import SlideUp from "@/components/animations/SlideUp";

const skills = [
  { name: "Next.js", level: 92, icon: Code2 },
  { name: "React.js", level: 90, icon: Code2 },
  { name: "Node.js", level: 86, icon: Server },
  { name: "Laravel", level: 94, icon: Terminal },
  { name: "TypeScript", level: 88, icon: Code2 },
  { name: "MySQL", level: 90, icon: Database },
  { name: "PostgreSQL", level: 82, icon: Database },
  { name: "AWS", level: 78, icon: Cloud },
  { name: "Azure", level: 80, icon: Cloud },
  { name: "Docker", level: 84, icon: Cpu },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(34,211,238,1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,1)_1px,transparent_1px)] [background-size:50px_50px]" />

      <SlideUp>
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-cyan-400" />

              <p className="text-xs uppercase tracking-[5px] text-cyan-400/80">
                Identity_Protocol
              </p>

              <span className="h-px w-16 bg-cyan-400/30" />
            </div>

            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  Developer Profile
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  A software engineering profile focused on building modern
                  digital systems, scalable applications and technology-driven
                  solutions.
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                <span className="text-[10px] uppercase tracking-[3px] text-cyan-300">
                  System Online
                </span>
              </div>
            </div>
          </div>

          {/* Main holographic panel */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.06)]">
            {/* Scan animation */}
            <motion.div
              animate={{ y: ["-100%", "500%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 top-0 z-20 h-24 w-full bg-gradient-to-b from-transparent via-cyan-400/[0.05] to-transparent"
            />

            {/* Corner markers */}
            <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/50" />
            <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/50" />
            <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/50" />
            <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/50" />

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Developer identity */}
              <div className="relative border-b border-cyan-400/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[3px] text-cyan-400/60">
                    DEV_CORE / 001
                  </span>

                  <ShieldCheck className="h-4 w-4 text-cyan-400/60" />
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-1 h-12 w-px bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                  <p className="text-xs uppercase tracking-[4px] text-cyan-400/60">
                    Software Engineering
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Undergraduate
                  </h3>
                </div>

                <p className="mt-8 text-sm leading-7 text-muted-foreground">
                  I am a Software Engineering undergraduate passionate about
                  building modern web applications and solving real-world
                  problems through technology.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  I specialize in full-stack development, creating scalable
                  frontend experiences and powerful backend systems using
                  modern technologies.
                </p>

                {/* System information */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center justify-between border-b border-cyan-400/10 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground">
                      Architecture
                    </span>

                    <span className="font-mono text-[10px] text-cyan-400">
                      FULL_STACK
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-cyan-400/10 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground">
                      Focus
                    </span>

                    <span className="font-mono text-[10px] text-cyan-400">
                      WEB_SYSTEMS
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground">
                      Status
                    </span>

                    <span className="font-mono text-[10px] text-cyan-400">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Technology matrix */}
              <div className="p-8 lg:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[3px] text-cyan-400/60">
                      System_Capabilities
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-foreground">
                      Technology Matrix
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] text-cyan-400/50">
                    10 MODULES
                  </span>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.06,
                          duration: 0.45,
                        }}
                        whileHover={{ x: 5 }}
                        className="group relative overflow-hidden rounded-lg border border-cyan-400/10 bg-cyan-400/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-cyan-400/20 bg-cyan-400/5">
                            <Icon className="h-4 w-4 text-cyan-400" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-xs font-medium text-foreground">
                                {skill.name}
                              </span>

                              <span className="font-mono text-[10px] text-cyan-400/70">
                                {skill.level}%
                              </span>
                            </div>

                            <div className="h-1 overflow-hidden rounded-full bg-cyan-400/10">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${skill.level}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.25 + index * 0.05,
                                  duration: 0.9,
                                  ease: "easeOut",
                                }}
                                className="h-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Hover scan */}
                        <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-cyan-400/10 transition-all duration-700 group-hover:left-[130%]" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* System footer */}
            <div className="flex flex-col gap-3 border-t border-cyan-400/10 bg-black/20 px-6 py-4 font-mono text-[9px] uppercase tracking-[2px] text-cyan-400/50 sm:flex-row sm:items-center sm:justify-between">
              <span>IDENTITY_PROTOCOL :: VERIFIED</span>

              <span>CORE_ACCESS // GRANTED</span>

              <span>SYS_2026</span>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}

