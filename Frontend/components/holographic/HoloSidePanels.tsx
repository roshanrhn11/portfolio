"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  Globe,
  Lock,
  Radio,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HoloSidePanels() {
  return (
    <>
      {/* =========================================
          LEFT SYSTEM PANEL
          ========================================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-auto
          absolute
          left-3
          top-1/2
          z-40
          hidden
          w-52
          -translate-y-1/2
          lg:block
        "
      >
        <HudPanel
          title="SYSTEM_STATUS"
          icon={<Activity className="h-3.5 w-3.5" />}
        >
          <StatusRow
            label="CORE"
            value="ONLINE"
            active
          />

          <StatusRow
            label="SECURITY"
            value="98%"
            active
          />

          <StatusRow
            label="NETWORK"
            value="STABLE"
            active
          />

          <StatusRow
            label="UPTIME"
            value="99.9%"
            active
          />

          <div className="mt-4 border-t border-cyan-300/10 pt-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[7px] tracking-[0.18em] text-cyan-300/30">
                SYSTEM_LOAD
              </span>

              <span className="font-mono text-[7px] text-cyan-300/50">
                42%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-cyan-300/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "42%" }}
                transition={{
                  duration: 1.5,
                  delay: 1.2,
                }}
                className="
                  h-full
                  bg-cyan-300/50
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                "
              />
            </div>
          </div>
        </HudPanel>

        {/* Connection line */}
        <div className="absolute -right-16 top-1/2 hidden h-px w-16 bg-gradient-to-r from-cyan-300/40 to-transparent xl:block" />

        <div className="absolute -right-1 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.9)] xl:block" />
      </motion.div>

      {/* =========================================
          RIGHT TECH STACK PANEL
          ========================================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: "easeOut",
        }}
        className="
          pointer-events-auto
          absolute
          right-3
          top-1/2
          z-40
          hidden
          w-52
          -translate-y-1/2
          lg:block
        "
      >
        <HudPanel
          title="TECH_STACK"
          icon={<Cpu className="h-3.5 w-3.5" />}
        >
          <TechRow
            icon={<Globe className="h-3 w-3" />}
            name="NEXT.JS"
            level="CORE"
          />

          <TechRow
            icon={<Zap className="h-3 w-3" />}
            name="REACT"
            level="CORE"
          />

          <TechRow
            icon={<Server className="h-3 w-3" />}
            name="NESTJS"
            level="BACKEND"
          />

          <TechRow
            icon={<Database className="h-3 w-3" />}
            name="MYSQL"
            level="DATA"
          />

          <TechRow
            icon={<Radio className="h-3 w-3" />}
            name="PRISMA"
            level="ORM"
          />

          <div className="mt-4 border-t border-cyan-300/10 pt-3">
            <div className="flex items-center gap-2">
              <Lock className="h-3 w-3 text-cyan-300/40" />

              <span className="font-mono text-[7px] tracking-[0.15em] text-cyan-300/35">
                STACK_ENCRYPTED
              </span>

              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300/60 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
        </HudPanel>

        {/* Connection line */}
        <div className="absolute -left-16 top-1/2 hidden h-px w-16 bg-gradient-to-l from-cyan-300/40 to-transparent xl:block" />

        <div className="absolute -left-1 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.9)] xl:block" />
      </motion.div>

      {/* =========================================
          TOP LEFT MINI HUD
          ========================================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          left-8
          top-28
          z-40
          hidden
          xl:block
        "
      >
        <MiniHud
          icon={<ShieldCheck className="h-3 w-3" />}
          label="SECURITY_PROTOCOL"
          value="ACTIVE"
        />
      </motion.div>

      {/* =========================================
          TOP RIGHT MINI HUD
          ========================================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1.35,
        }}
        className="
          pointer-events-none
          absolute
          right-8
          top-28
          z-40
          hidden
          xl:block
        "
      >
        <MiniHud
          icon={<Radio className="h-3 w-3" />}
          label="HOLO_LINK"
          value="CONNECTED"
        />
      </motion.div>
    </>
  );
}

/* =============================================
   MAIN HUD PANEL
   ============================================= */

function HudPanel({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        boxShadow: "0 0 35px rgba(0, 200, 255, 0.10)",
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-cyan-300/15
        bg-cyan-950/20
        p-4
        shadow-[0_0_30px_rgba(0,180,255,0.04)]
        backdrop-blur-md
      "
    >
      {/* Top glow */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-cyan-300/50 via-cyan-300/10 to-transparent" />

      {/* Corner markers */}
      <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-cyan-300/25" />
      <div className="absolute right-2 top-2 h-3 w-3 border-r border-t border-cyan-300/25" />
      <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-cyan-300/25" />
      <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-cyan-300/25" />

      {/* Header */}
      <div className="flex items-center gap-2 border-b border-cyan-300/10 pb-3">
        <span className="text-cyan-300/60">
          {icon}
        </span>

        <span className="font-mono text-[8px] tracking-[0.2em] text-cyan-200/55">
          {title}
        </span>

        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300/60 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </div>

      {/* Content */}
      <div className="mt-4">
        {children}
      </div>
    </motion.div>
  );
}

/* =============================================
   STATUS ROW
   ============================================= */

function StatusRow({
  label,
  value,
  active = false,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <span
          className={`
            h-1
            w-1
            rounded-full
            ${
              active
                ? "bg-cyan-300 shadow-[0_0_7px_rgba(34,211,238,0.8)]"
                : "bg-cyan-300/20"
            }
          `}
        />

        <span className="font-mono text-[8px] tracking-[0.12em] text-cyan-100/30">
          {label}
        </span>
      </div>

      <span className="font-mono text-[8px] tracking-[0.1em] text-cyan-200/55">
        {value}
      </span>
    </div>
  );
}

/* =============================================
   TECH ROW
   ============================================= */

function TechRow({
  icon,
  name,
  level,
}: {
  icon: React.ReactNode;
  name: string;
  level: string;
}) {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      className="
        group
        flex
        items-center
        gap-2
        border-b
        border-cyan-300/[0.06]
        py-2
      "
    >
      <span className="text-cyan-300/35 transition-colors group-hover:text-cyan-300/70">
        {icon}
      </span>

      <span className="flex-1 font-mono text-[8px] tracking-[0.1em] text-cyan-100/40 transition-colors group-hover:text-cyan-100/70">
        {name}
      </span>

      <span className="font-mono text-[6px] tracking-[0.12em] text-cyan-300/25">
        {level}
      </span>
    </motion.div>
  );
}

/* =============================================
   MINI HUD
   ============================================= */

function MiniHud({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 border border-cyan-300/10 bg-cyan-950/20 px-3 py-2 backdrop-blur-md">
      <span className="text-cyan-300/50">
        {icon}
      </span>

      <div>
        <div className="font-mono text-[6px] tracking-[0.18em] text-cyan-300/30">
          {label}
        </div>

        <div className="mt-0.5 font-mono text-[7px] tracking-[0.15em] text-cyan-200/55">
          {value}
        </div>
      </div>
    </div>
  );
}

