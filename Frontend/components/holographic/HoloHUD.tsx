"use client";

import { useEffect, useState } from "react";
import { Activity, Cpu, Database, Globe, Radio } from "lucide-react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
        }),
      );
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}

function SystemItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3 w-3 text-cyan-300/80" />

      <span className="text-[9px] tracking-[0.18em] text-cyan-100/45">
        {label}
      </span>

      <span className="ml-auto text-[9px] tracking-[0.12em] text-cyan-200/75">
        {value}
      </span>
    </div>
  );
}

export default function HoloHUD() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-20
        overflow-hidden
        font-mono
        text-cyan-100
      "
      aria-hidden="true"
    >
      {/* Top status bar */}
      <div
        className="
          absolute
          left-[5%]
          right-[5%]
          top-[5%]
          flex
          items-center
          justify-between
          border-b
          border-cyan-300/15
          pb-2
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(34,211,238,0.9)]
            "
          />

          <span className="text-[9px] font-medium tracking-[0.25em] text-cyan-200/80">
            SYSTEM ONLINE
          </span>
        </div>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.18em] text-cyan-100/40">
          <Radio className="h-3 w-3" />
          <span>LINK ACTIVE</span>
          <span className="text-cyan-300/60">
            <Clock />
          </span>
        </div>
      </div>

      {/* Top left technical label */}
      <div className="absolute left-[5%] top-[18%]">
        <div className="text-[8px] tracking-[0.3em] text-cyan-300/35">
          DEV_CORE // 01
        </div>

        <div className="mt-1 h-px w-20 bg-gradient-to-r from-cyan-300/60 to-transparent" />
      </div>

      {/* Top right technical label */}
      <div className="absolute right-[5%] top-[18%] text-right">
        <div className="text-[8px] tracking-[0.25em] text-cyan-300/35">
          SECURE CHANNEL
        </div>

        <div className="mt-1 ml-auto h-px w-20 bg-gradient-to-l from-cyan-300/60 to-transparent" />
      </div>

      {/* Central scanning line */}
      <div
        className="
          absolute
          left-[5%]
          right-[5%]
          top-1/2
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/25
          to-transparent
        "
      />

      {/* Left data panel */}
      <div
        className="
          absolute
          bottom-[13%]
          left-[5%]
          w-[30%]
          min-w-[125px]
          max-w-[210px]
          border-l
          border-cyan-300/20
          pl-3
        "
      >
        <div className="mb-2 text-[8px] tracking-[0.25em] text-cyan-300/40">
          SYSTEM COMPONENTS
        </div>

        <div className="space-y-1.5">
          <SystemItem
            icon={Globe}
            label="FRONTEND"
            value="ACTIVE"
          />

          <SystemItem
            icon={Cpu}
            label="BACKEND"
            value="ACTIVE"
          />

          <SystemItem
            icon={Database}
            label="DATABASE"
            value="CONNECTED"
          />
        </div>
      </div>

      {/* Right data panel */}
      <div
        className="
          absolute
          bottom-[13%]
          right-[5%]
          w-[30%]
          min-w-[125px]
          max-w-[210px]
          border-r
          border-cyan-300/20
          pr-3
          text-right
        "
      >
        <div className="mb-2 text-[8px] tracking-[0.25em] text-cyan-300/40">
          ACTIVITY
        </div>

        <div className="flex items-center justify-end gap-2">
          <Activity className="h-3 w-3 text-cyan-300/70" />

          <span className="text-[9px] tracking-[0.16em] text-cyan-100/60">
            BUILDING SYSTEMS
          </span>
        </div>

        <div className="mt-2 flex justify-end gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-cyan-300/40"
            />
          ))}
        </div>
      </div>

      {/* Bottom center scanner */}
      <div
        className="
          absolute
          bottom-[5%]
          left-1/2
          -translate-x-1/2
          text-center
        "
      >
        <div className="text-[7px] tracking-[0.4em] text-cyan-300/30">
          HOLOGRAPHIC INTERFACE
        </div>

        <div className="mx-auto mt-1 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      </div>

      {/* Corner brackets */}

      <div
        className="
          absolute
          left-[2.5%]
          top-[3%]
          h-5
          w-5
          border-l
          border-t
          border-cyan-300/40
        "
      />

      <div
        className="
          absolute
          right-[2.5%]
          top-[3%]
          h-5
          w-5
          border-r
          border-t
          border-cyan-300/40
        "
      />

      <div
        className="
          absolute
          bottom-[3%]
          left-[2.5%]
          h-5
          w-5
          border-b
          border-l
          border-cyan-300/40
        "
      />

      <div
        className="
          absolute
          bottom-[3%]
          right-[2.5%]
          h-5
          w-5
          border-b
          border-r
          border-cyan-300/40
        "
      />

      {/* Animated scan */}
      <div
        className="
          absolute
          left-[6%]
          right-[6%]
          top-[10%]
          h-px
          animate-[scan_5s_linear_infinite]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/20
          to-transparent
        "
      />
    </div>
  );
}