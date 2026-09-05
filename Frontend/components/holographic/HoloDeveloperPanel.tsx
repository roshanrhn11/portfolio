"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Cpu,
  Activity,
  UserRound,
  ScanLine,
  Radio,
  Database,
  Globe,
} from "lucide-react";

export default function HoloDeveloperPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="
        relative
        w-full
        max-w-5xl
        rounded-2xl
        border
        border-cyan-300/20
        bg-cyan-950/10
        backdrop-blur-md
        shadow-[0_0_80px_rgba(0,180,255,0.08)]
        overflow-hidden
      "
    >
      {/* =========================================
          TOP BAR
          ========================================= */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-cyan-300/15
          px-5
          py-3
        "
      >
        <div className="flex items-center gap-3">
          <Terminal className="h-4 w-4 text-cyan-300" />

          <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-200/70">
            DEV_CORE
          </span>

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(34,211,238,0.9)]
              animate-pulse
            "
          />
        </div>

        <div className="font-mono text-[9px] tracking-[0.2em] text-cyan-200/35">
          NODE_01 // ONLINE
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT
          ========================================= */}
      <div className="grid md:grid-cols-[1.35fr_0.65fr]">
        {/* =======================================
            LEFT SIDE
            ======================================= */}
        <div className="p-7 md:p-10">
          <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-300/40">
            IDENTITY_PROTOCOL
          </div>

          <div className="mt-4">
            <h1
              className="
                font-mono
                text-2xl
                font-bold
                tracking-tight
                text-cyan-50
                md:text-3xl
              "
            >
              PATHMANTHAN NIROSHAN
            </h1>

            <div
              className="
                mt-2
                font-mono
                text-sm
                tracking-[0.18em]
                text-cyan-300/70
                md:text-base
              "
            >
              FULL STACK DEVELOPER
            </div>
          </div>

          <p
            className="
              mt-6
              max-w-xl
              font-mono
              text-sm
              leading-7
              text-cyan-100/45
            "
          >
            Building modern, scalable web applications, backend systems and
            cloud-powered solutions.
          </p>

          {/* =====================================
              HOLOGRAPHIC IDENTITY
              ===================================== */}
          <div className="relative mt-8 flex min-h-[330px] items-center justify-center overflow-hidden rounded-xl border border-cyan-300/10 bg-cyan-300/[0.02]">
            {/* Background grid */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-30
                [background-image:linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-64
                w-64
                rounded-full
                border
                border-dashed
                border-cyan-300/20
              "
            />

            {/* Middle rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-52
                w-52
                rounded-full
                border
                border-cyan-300/15
              "
            >
              <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </motion.div>

            {/* Holographic profile container */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                flex
                h-44
                w-44
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-cyan-300/30
                bg-cyan-400/[0.06]
                shadow-[0_0_50px_rgba(0,200,255,0.18)]
              "
            >
              {/* Profile image */}
              <img
                src="/profile.png"
                alt="Roshan - Full Stack Developer"
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-75
                  grayscale
                  mix-blend-screen
                "
              />

              {/* Cyan hologram overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-cyan-400/20
                  mix-blend-color
                "
              />

              {/* Scan lines */}
              <motion.div
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  h-1/3
                  w-full
                  bg-gradient-to-b
                  from-transparent
                  via-cyan-300/25
                  to-transparent
                "
              />

              {/* Center scan line */}
              <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-cyan-300/30 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            </motion.div>

            {/* Identity label */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                z-20
                -translate-x-1/2
                whitespace-nowrap
                border
                border-cyan-300/15
                bg-cyan-950/40
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <div className="flex items-center gap-2">
                <ScanLine className="h-3 w-3 text-cyan-300/70" />

                <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-200/60">
                  IDENTITY_VERIFIED
                </span>
              </div>
            </div>

            {/* Floating data label - left */}
            <div
              className="
                absolute
                left-4
                top-8
                hidden
                border-l
                border-cyan-300/30
                pl-3
                font-mono
                text-[7px]
                leading-4
                tracking-[0.15em]
                text-cyan-300/35
                sm:block
              "
            >
              BIO_SCAN
              <br />
              ACTIVE
            </div>

            {/* Floating data label - right */}
            <div
              className="
                absolute
                right-4
                top-8
                hidden
                border-r
                border-cyan-300/30
                pr-3
                text-right
                font-mono
                text-[7px]
                leading-4
                tracking-[0.15em]
                text-cyan-300/35
                sm:block
              "
            >
              HOLO_ID
              <br />
              RSN_001
            </div>

            {/* Corner markers */}
            <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-300/30" />
            <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-300/30" />
            <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-300/30" />
            <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-300/30" />
          </div>

          {/* =====================================
              STATUS
              ===================================== */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            <StatusItem
              icon={<Cpu className="h-3.5 w-3.5" />}
              label="STACK"
              value="FULL"
            />

            <StatusItem
              icon={<ShieldCheck className="h-3.5 w-3.5" />}
              label="SYSTEM"
              value="SECURE"
            />

            <StatusItem
              icon={<Activity className="h-3.5 w-3.5" />}
              label="STATUS"
              value="ACTIVE"
            />
          </div>
        </div>

        {/* =======================================
            RIGHT DATA PANEL
            ======================================= */}
        <div
          className="
            border-t
            border-cyan-300/10
            p-7
            md:border-l
            md:border-t-0
          "
        >
          <div className="font-mono text-[9px] tracking-[0.25em] text-cyan-300/40">
            SYSTEM_DATA
          </div>

          <div className="mt-5 space-y-4 font-mono text-[10px]">
            <DataRow
              icon={<Globe className="h-3 w-3" />}
              label="FRONTEND"
              value="NEXT.JS"
            />

            <DataRow
              icon={<Cpu className="h-3 w-3" />}
              label="UI"
              value="REACT"
            />

            <DataRow
              icon={<Radio className="h-3 w-3" />}
              label="BACKEND"
              value="NESTJS"
            />

            <DataRow
              icon={<Database className="h-3 w-3" />}
              label="DATABASE"
              value="MYSQL"
            />

            <DataRow
              icon={<Terminal className="h-3 w-3" />}
              label="ORM"
              value="PRISMA"
            />

            <DataRow
              icon={<Globe className="h-3 w-3" />}
              label="CLOUD"
              value="VERCEL"
            />
          </div>

          {/* System monitor */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-300/30">
                SYSTEM_STABILITY
              </span>

              <span className="font-mono text-[8px] text-cyan-300/50">
                98%
              </span>
            </div>

            <div className="mt-2 h-1 overflow-hidden rounded-full bg-cyan-300/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{
                  duration: 1.5,
                  delay: 1,
                }}
                className="h-full bg-cyan-300/50 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
              />
            </div>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-cyan-300/30 to-transparent" />

          <div className="mt-5 space-y-3">
            <SystemLine
              icon={<UserRound className="h-3 w-3" />}
              text="DEVELOPER_IDENTITY_LOADED"
            />

            <SystemLine
              icon={<ShieldCheck className="h-3 w-3" />}
              text="SECURITY_PROTOCOL_ACTIVE"
            />

            <SystemLine
              icon={<Activity className="h-3 w-3" />}
              text="PORTFOLIO_INTERFACE_READY"
            />
          </div>

          <div className="mt-8 font-mono text-[8px] leading-5 tracking-[0.15em] text-cyan-300/30">
            CONNECTION_ESTABLISHED
            <br />
            HOLOGRAPHIC_LINK_STABLE
            <br />
            NODE_01_READY
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM SCAN LINE
          ========================================= */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-300/70
          to-transparent
        "
      />
    </motion.div>
  );
}

/* =============================================
   STATUS ITEM
   ============================================= */

function StatusItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        border
        border-cyan-300/10
        bg-cyan-300/[0.03]
        p-3
      "
    >
      <div className="flex items-center gap-2 text-cyan-300/60">
        {icon}

        <span className="font-mono text-[8px] tracking-[0.2em]">
          {label}
        </span>
      </div>

      <div className="mt-2 font-mono text-[10px] tracking-[0.15em] text-cyan-100/65">
        {value}
      </div>
    </div>
  );
}

/* =============================================
   DATA ROW
   ============================================= */

function DataRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-cyan-300/[0.06] pb-2">
      <span className="text-cyan-300/35">{icon}</span>

      <span className="flex-1 text-cyan-100/30">
        {label}
      </span>

      <span className="text-cyan-200/65">
        {value}
      </span>
    </div>
  );
}

/* =============================================
   SYSTEM LINE
   ============================================= */

function SystemLine({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-[8px] tracking-[0.12em] text-cyan-300/35">
      <span className="text-cyan-300/50">{icon}</span>

      <span>{text}</span>

      <span className="ml-auto h-1 w-1 rounded-full bg-cyan-300/50" />
    </div>
  );
}
