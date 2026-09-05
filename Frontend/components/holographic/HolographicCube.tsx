
"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  ExternalLink,
  Layers3,
  Mail,
  Maximize2,
  MousePointer2,
  Radio,
  ShieldCheck,
  Sparkles,
  Wifi,
  X,
  Zap,
} from "lucide-react";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

/* ============================================================
   TYPES
============================================================ */

type Face = "home" | "projects" | "contact" | "about";

interface HolographicCubeProps {
  activeScreen?: Face;
  onFaceChange?: (face: Face) => void;
}

interface GlassPanelProps {
  transform: string;
  label: string;
  index: string;
  face: Face;
  children: ReactNode;
  onExpand: (face: Face) => void;
}

interface PlanViewProps {
  activeFace: Face;
  onSelect: (face: Face) => void;
}

interface ExpandedScreenProps {
  face: Face;
  onClose: () => void;
}

/* ============================================================
   CONFIG
============================================================ */

const faces: Face[] = [
  "home",
  "projects",
  "contact",
  "about",
];

const faceLabels: Record<Face, string> = {
  home: "HOME // CORE",
  projects: "PROJECT DATABASE",
  contact: "SECURE COMMUNICATION",
  about: "IDENTITY PROFILE",
};

const faceAngles: Record<Face, number> = {
  home: 0,
  projects: -90,
  contact: -180,
  about: -270,
};

/*
 * Distance between the center and each holographic panel.
 *
 * Larger = more open / separated.
 */
const PANEL_RADIUS = 330;

/*
 * Mouse movement -> rotation.
 */
const ROTATION_PER_PIXEL = 0.45;

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function HolographicCube({
  activeScreen,
  onFaceChange,
}: HolographicCubeProps) {
  const rotation = useMotionValue(0);

  const [activeFace, setActiveFace] =
    useState<Face>("home");

  const [expandedFace, setExpandedFace] =
    useState<Face | null>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const pointerRef = useRef({
    active: false,
    startX: 0,
    startRotation: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  /*
   * Prevent navbar and cube updates from fighting.
   */
  const changingFromExternalRef = useRef(false);

  /* ==========================================================
     ANGLE HELPERS
  ========================================================== */

  const normalizeAngle = (angle: number) => {
    return ((angle % 360) + 360) % 360;
  };

  const getNearestFace = (angle: number): Face => {
    const normalized = normalizeAngle(-angle);

    const index =
      Math.round(normalized / 90) % 4;

    return faces[index];
  };

  const getContinuousTarget = (
    face: Face,
    current: number
  ) => {
    const base = faceAngles[face];

    const turns = Math.round(
      (current - base) / 360
    );

    return base + turns * 360;
  };

  /* ==========================================================
     FACE CHANGE
  ========================================================== */

  const changeFace = (
    face: Face,
    notify = true
  ) => {
    const current = rotation.get();

    const target =
      getContinuousTarget(face, current);

    animate(rotation, target, {
      type: "spring",
      stiffness: 145,
      damping: 21,
      mass: 0.9,
    });

    setActiveFace(face);

    if (notify) {
      onFaceChange?.(face);
    }
  };

  /* ==========================================================
     NAVBAR -> CUBE
  ========================================================== */

  useEffect(() => {
    if (!activeScreen) return;

    if (activeScreen === activeFace) return;

    changingFromExternalRef.current = true;

    const current = rotation.get();

    const target =
      getContinuousTarget(
        activeScreen,
        current
      );

    animate(rotation, target, {
      type: "spring",
      stiffness: 130,
      damping: 20,
      mass: 0.9,
    });

    setActiveFace(activeScreen);

    const timer = setTimeout(() => {
      changingFromExternalRef.current = false;
    }, 500);

    return () => clearTimeout(timer);
  }, [activeScreen, activeFace, rotation]);

  /* ==========================================================
     DRAG SNAP
  ========================================================== */

  const snapToNearestFace = () => {
    const current = rotation.get();

    const velocity =
      pointerRef.current.velocity;

    const projected =
      current + velocity * 120;

    const nearestFace =
      getNearestFace(projected);

    const target =
      getContinuousTarget(
        nearestFace,
        projected
      );

    animate(rotation, target, {
      type: "spring",
      stiffness: 145,
      damping: 21,
      mass: 0.9,
    });

    setActiveFace(nearestFace);

    onFaceChange?.(nearestFace);
  };

  /* ==========================================================
     POINTER DOWN
     
     IMPORTANT:
     This keeps the old working button logic.
  ========================================================== */

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const target =
      event.target as HTMLElement;

    /*
     * DO NOT ROTATE WHEN INTERACTING
     * WITH BUTTONS/LINKS/FORM ELEMENTS.
     */
    if (
      target.closest(
        "button, a, input, textarea, select, [data-no-drag]"
      )
    ) {
      return;
    }

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    pointerRef.current = {
      active: true,
      startX: event.clientX,
      startRotation: rotation.get(),
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };

    setIsDragging(true);
  };

  /* ============================================================
     POINTER MOVE
  ============================================================ */

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!pointerRef.current.active) {
      return;
    }

    const now = performance.now();

    const deltaX =
      event.clientX -
      pointerRef.current.startX;

    const nextRotation =
      pointerRef.current.startRotation -
      deltaX * ROTATION_PER_PIXEL;

    rotation.set(nextRotation);

    const distance =
      event.clientX -
      pointerRef.current.lastX;

    const time = Math.max(
      now - pointerRef.current.lastTime,
      1
    );

    pointerRef.current.velocity =
      (-distance *
        ROTATION_PER_PIXEL) /
      time;

    pointerRef.current.lastX =
      event.clientX;

    pointerRef.current.lastTime = now;
  };

  /* ============================================================
     POINTER UP
  ============================================================ */

  const handlePointerUp = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!pointerRef.current.active) {
      return;
    }

    pointerRef.current.active = false;

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Safe fallback.
    }

    setIsDragging(false);

    snapToNearestFace();
  };

  /* ============================================================
     EXPANDED VIEW
  ============================================================ */

  const openExpanded = (face: Face) => {
    /*
     * Align the selected panel first.
     */
    changeFace(face);

    /*
     * Small delay makes the transition feel intentional.
     */
    window.setTimeout(() => {
      setExpandedFace(face);
    }, 160);
  };

  const closeExpanded = () => {
    setExpandedFace(null);
  };

  /* ============================================================
     KEYBOARD
  ============================================================ */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setExpandedFace(null);
        return;
      }

      /*
       * Keyboard navigation.
       */
      if (event.key === "ArrowLeft") {
        const currentIndex =
          faces.indexOf(activeFace);

        const nextIndex =
          (currentIndex - 1 + faces.length) %
          faces.length;

        changeFace(faces[nextIndex]);
      }

      if (event.key === "ArrowRight") {
        const currentIndex =
          faces.indexOf(activeFace);

        const nextIndex =
          (currentIndex + 1) %
          faces.length;

        changeFace(faces[nextIndex]);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeFace]);

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      <main className="relative h-screen w-full overflow-hidden bg-[#030811] text-cyan-100">

        {/* ======================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">

          {/* Main radial glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[900px]
              w-[900px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/[0.045]
              blur-[160px]
            "
          />

          {/* Secondary glow */}
          <div
            className="
              absolute
              left-[20%]
              top-[20%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-blue-500/[0.025]
              blur-[100px]
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.075]
              [background-image:linear-gradient(rgba(0,245,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.28)_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          {/* Scan lines */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_1px,transparent_1px,transparent_5px)]
            "
          />

          {/* Horizontal scanner */}
          <motion.div
            animate={{
              y: [
                "-45vh",
                "45vh",
                "-45vh",
              ],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              right-0
              top-1/2
              h-px
              bg-cyan-300/20
              shadow-[0_0_18px_rgba(34,211,238,0.5)]
            "
          />
        </div>

        {/* ======================================================
            TOP SYSTEM HEADER
        ====================================================== */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 px-5 pt-5 md:px-8">

          <div className="flex items-start justify-between">

            <div className="font-mono">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.9)]" />

                <span className="text-[9px] tracking-[4px] text-cyan-200/70">
                  PORTFOLIO_OS
                </span>
              </div>

              <div className="mt-2 text-[8px] tracking-[3px] text-cyan-300/30">
                HOLOGRAPHIC INTERFACE // ONLINE
              </div>

            </div>

            <div className="hidden text-right font-mono md:block">

              <div className="text-[8px] tracking-[2px] text-cyan-300/30">
                SYSTEM TIME
              </div>

              <div className="mt-1 text-[10px] tracking-[2px] text-cyan-100/60">
                {activeFace.toUpperCase()}
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================
            CENTRAL CUBE
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            [perspective:1800px]
          "
          style={{
            touchAction: "pan-y",
          }}
        >

          <motion.div
            className={`
              relative
              h-[430px]
              w-[min(72vw,620px)]
              md:h-[470px]
              ${
                isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
              }
            `}
            style={{
              rotateY: rotation,
              transformStyle: "preserve-3d",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >

            {/* ==================================================
                HOME
            ================================================== */}

            <GlassPanel
              transform={`translateZ(${PANEL_RADIUS}px)`}
              label="HOME // CORE"
              index="01"
              face="home"
              onExpand={openExpanded}
            >
              <HomeFace />
            </GlassPanel>

            {/* ==================================================
                PROJECTS
            ================================================== */}

            <GlassPanel
              transform={`rotateY(90deg) translateZ(${PANEL_RADIUS}px)`}
              label="PROJECT DATABASE"
              index="02"
              face="projects"
              onExpand={openExpanded}
            >
              <ProjectsFace />
            </GlassPanel>

            {/* ==================================================
                CONTACT
            ================================================== */}

            <GlassPanel
              transform={`rotateY(180deg) translateZ(${PANEL_RADIUS}px)`}
              label="COMMUNICATION"
              index="03"
              face="contact"
              onExpand={openExpanded}
            >
              <ContactFace />
            </GlassPanel>

            {/* ==================================================
                ABOUT
            ================================================== */}

            <GlassPanel
              transform={`rotateY(-90deg) translateZ(${PANEL_RADIUS}px)`}
              label="IDENTITY PROFILE"
              index="04"
              face="about"
              onExpand={openExpanded}
            >
              <AboutFace />
            </GlassPanel>

          </motion.div>
        </div>

        {/* ======================================================
            LEFT HUD
        ====================================================== */}

        <SystemStatus />

        {/* ======================================================
            RIGHT HUD
        ====================================================== */}

        <TechStack />

        {/* ======================================================
            PLAN VIEW
        ====================================================== */}

        <PlanView
          activeFace={activeFace}
          onSelect={changeFace}
        />

        {/* ======================================================
            BOTTOM CENTER INSTRUCTION
        ====================================================== */}

        <div className="pointer-events-none absolute bottom-5 left-1/2 z-40 -translate-x-1/2">

          <div className="flex items-center gap-3 font-mono">

            <MousePointer2 className="h-3 w-3 text-cyan-400/50" />

            <span className="text-[8px] tracking-[3px] text-cyan-300/40">
              {isDragging
                ? "ROTATING_SYSTEM..."
                : "DRAG / SWIPE TO ROTATE"}
            </span>

          </div>
        </div>

        {/* ======================================================
            SIDE NAV ARROWS
        ====================================================== */}

        <button
          type="button"
          data-no-drag
          aria-label="Previous panel"
          onClick={() => {
            const index =
              faces.indexOf(activeFace);

            const previous =
              (index - 1 + faces.length) %
              faces.length;

            changeFace(faces[previous]);
          }}
          className="
            absolute
            left-4
            top-1/2
            z-40
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/15
            bg-cyan-300/[0.035]
            p-3
            text-cyan-300/50
            backdrop-blur-md
            transition-all
            hover:border-cyan-300/50
            hover:bg-cyan-300/10
            hover:text-cyan-100
            lg:flex
          "
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          data-no-drag
          aria-label="Next panel"
          onClick={() => {
            const index =
              faces.indexOf(activeFace);

            const next =
              (index + 1) % faces.length;

            changeFace(faces[next]);
          }}
          className="
            absolute
            right-4
            top-1/2
            z-40
            hidden
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/15
            bg-cyan-300/[0.035]
            p-3
            text-cyan-300/50
            backdrop-blur-md
            transition-all
            hover:border-cyan-300/50
            hover:bg-cyan-300/10
            hover:text-cyan-100
            lg:flex
          "
        >
          <ChevronRight className="h-4 w-4" />
        </button>

      </main>

      {/* ========================================================
          EXPANDED SCREEN
      ======================================================== */}

      <AnimatePresence>
        {expandedFace && (
          <ExpandedScreen
            face={expandedFace}
            onClose={closeExpanded}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ============================================================
   GLASS PANEL
============================================================ */

function GlassPanel({
  transform,
  label,
  index,
  face,
  children,
  onExpand,
}: GlassPanelProps) {
  return (
    <div
      className="
        absolute
        inset-0
        h-full
        w-full
      "
      style={{
        transform,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >

      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[24px]
          border
          border-cyan-300/20
          bg-[#061321]/80
          shadow-[0_0_80px_rgba(0,220,255,0.08),inset_0_0_70px_rgba(0,220,255,0.035)]
          backdrop-blur-2xl
        "
      >

        {/* ======================================================
            INNER GLASS
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[23px]
            border
            border-cyan-300/[0.07]
          "
        />

        {/* ======================================================
            TOP HEADER
        ====================================================== */}

        <div
          className="
            absolute
            left-5
            right-5
            top-4
            z-10
            flex
            items-center
            justify-between
            border-b
            border-cyan-300/10
            pb-3
            font-mono
          "
        >

          <div className="flex items-center gap-2">

            <span className="text-[8px] tracking-[2px] text-cyan-300/40">
              PANEL_{index}
            </span>

            <span className="text-[8px] text-cyan-300/20">
              //
            </span>

            <span className="text-[8px] tracking-[1.5px] text-cyan-200/55">
              {label}
            </span>

          </div>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,245,255,0.8)]" />

            <span className="text-[7px] tracking-[1.5px] text-cyan-300/35">
              ONLINE
            </span>

          </div>

        </div>

        {/* ======================================================
            CORNER HUD MARKERS
        ====================================================== */}

        <div className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l border-t border-cyan-300/40" />

        <div className="pointer-events-none absolute right-2 top-2 h-5 w-5 border-r border-t border-cyan-300/40" />

        <div className="pointer-events-none absolute bottom-2 left-2 h-5 w-5 border-b border-l border-cyan-300/40" />

        <div className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b border-r border-cyan-300/40" />

        {/* ======================================================
            SCAN EFFECT
        ====================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-cyan-300/20
          "
          animate={{
            y: [30, 390],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ======================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            top-14
            p-5
          "
        >
          {children}
        </div>

        {/* ======================================================
            WORKING FULL VIEW BUTTON
        ====================================================== */}

        <button
          type="button"
          data-no-drag
          aria-label={`Open ${face} full view`}
          onPointerDown={(event) => {
            /*
             * IMPORTANT:
             * Prevent parent cube from starting drag.
             */
            event.stopPropagation();
          }}
          onPointerUp={(event) => {
            event.stopPropagation();
          }}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            onExpand(face);
          }}
          className="
            group
            absolute
            bottom-4
            right-4
            z-[100]
            flex
            cursor-pointer
            items-center
            gap-2
            rounded-lg
            border
            border-cyan-300/25
            bg-[#071b2b]/90
            px-3
            py-2
            font-mono
            text-[8px]
            tracking-[1.5px]
            text-cyan-200/75
            shadow-[0_0_18px_rgba(34,211,238,0.06)]
            backdrop-blur-md
            transition-all
            duration-200
            hover:border-cyan-300/70
            hover:bg-cyan-300/10
            hover:text-cyan-100
            hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]
            active:scale-95
          "
        >

          <span className="relative h-1.5 w-1.5">

            <span className="absolute inset-0 rounded-full bg-cyan-400" />

            <span className="absolute -inset-1 animate-ping rounded-full bg-cyan-400/20" />

          </span>

          <span>
            OPEN FULL VIEW
          </span>

          <Maximize2
            className="
              h-3
              w-3
              transition-transform
              duration-200
              group-hover:rotate-12
            "
          />

        </button>

      </div>
    </div>
  );
}

/* ============================================================
   HOME FACE
============================================================ */

function HomeFace() {
  return (
    <div className="flex h-full flex-col justify-center font-mono">

      <div className="mb-3 flex items-center gap-2">

        <Sparkles className="h-3 w-3 text-cyan-400/60" />

        <span className="text-[9px] tracking-[4px] text-cyan-400/45">
          PORTFOLIO_OS // CORE
        </span>

      </div>

      <h1 className="text-2xl font-semibold tracking-tight text-cyan-50 md:text-4xl">
        PATHMANATHAN NIROSHAN
      </h1>

      <div className="mt-2 text-sm tracking-[3px] text-cyan-300/65">
        SOFTWARE DEVELOPER
      </div>

      <div className="mt-4 h-px w-28 bg-cyan-300/30" />

      <p className="mt-5 max-w-xl text-xs leading-6 text-slate-300/60">
        Software engineering undergraduate focused on
        building modern web applications, scalable
        backend systems and intelligent digital
        experiences.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        <StatusTag text="NEXT.JS" />
        <StatusTag text="REACT" />
        <StatusTag text="NODE.JS" />
        <StatusTag text="LARAVEL" />

      </div>

      <div className="mt-6 flex items-center gap-5">

        <div className="flex items-center gap-2">
          <Zap className="h-3 w-3 text-cyan-400/60" />
          <span className="text-[8px] tracking-[1.5px] text-cyan-300/40">
            SYSTEM_READY
          </span>
        </div>

        <div className="h-3 w-px bg-cyan-300/10" />

        <div className="text-[8px] tracking-[1.5px] text-cyan-300/35">
          BUILD // DEPLOY // SCALE
        </div>

      </div>

    </div>
  );
}

/* ============================================================
   ABOUT FACE
============================================================ */

function AboutFace() {
  return (
    <div className="flex h-full flex-col justify-center font-mono">

      <div className="flex items-center gap-4">

        <div
          className="
            relative
            flex
            h-24
            w-24
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            border
            border-cyan-300/20
            bg-cyan-300/[0.025]
            shadow-[inset_0_0_30px_rgba(0,245,255,0.04)]
          "
        >

          <div className="absolute inset-3 rounded-full border border-cyan-400/15" />

          <div className="absolute inset-6 rounded-full border border-cyan-400/10" />

          <div className="text-2xl font-semibold text-cyan-200/80">
            DEV
          </div>

          <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.8)]" />

        </div>

        <div>

          <div className="flex items-center gap-2">

            <ShieldCheck className="h-3 w-3 text-cyan-400/60" />

            <span className="text-[8px] tracking-[3px] text-cyan-300/45">
              IDENTITY VERIFIED
            </span>

          </div>

          <h2 className="mt-2 text-2xl font-semibold text-cyan-100">
            NIROSHAN
          </h2>

          <div className="mt-1 text-xs text-slate-400/70">
            SOFTWARE ENGINEERING
          </div>

        </div>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">

        <Metric
          label="STATUS"
          value="ACTIVE"
        />

        <Metric
          label="MODE"
          value="DEVELOPER"
        />

        <Metric
          label="STACK"
          value="FULLSTACK"
        />

        <Metric
          label="CLOUD"
          value="ENABLED"
        />

      </div>

    </div>
  );
}

/* ============================================================
   PROJECTS FACE
============================================================ */

function ProjectsFace() {
  const projects = [
    "StyleCart",
    "Smart Cabin Platform",
    "Vehicle Rental System",
    "RainyStack",
  ];

  return (
    <div className="flex h-full flex-col font-mono">

      <div className="mb-4">

        <div className="flex items-center gap-2">

          <Database className="h-3 w-3 text-cyan-400/60" />

          <div className="text-[8px] tracking-[3px] text-cyan-300/40">
            DATABASE // PROJECTS
          </div>

        </div>

        <div className="mt-1 text-xl font-semibold text-cyan-100">
          FEATURED WORK
        </div>

      </div>

      <div className="grid flex-1 grid-cols-2 gap-2">

        {projects.map(
          (project, index) => (
            <motion.div
              key={project}
              whileHover={{
                y: -2,
              }}
              className="
                rounded-lg
                border
                border-cyan-300/10
                bg-cyan-300/[0.025]
                p-3
                transition
                hover:border-cyan-300/25
                hover:bg-cyan-300/[0.045]
              "
            >

              <div className="text-[8px] tracking-[2px] text-cyan-400/35">
                PROJECT_
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mt-2 text-xs text-cyan-100/80">
                {project}
              </div>

              <div className="mt-3 h-px bg-cyan-300/10" />

              <div className="mt-2 flex items-center gap-2">

                <span className="h-1 w-1 rounded-full bg-cyan-400/70" />

                <span className="text-[8px] tracking-[1px] text-slate-400/50">
                  SYSTEM_READY
                </span>

              </div>

            </motion.div>
          )
        )}

      </div>

    </div>
  );
}

/* ============================================================
   CONTACT FACE
============================================================ */

function ContactFace() {
  return (
    <div className="flex h-full flex-col justify-center font-mono">

      <div className="flex items-center gap-2">

        <Radio className="h-3 w-3 text-cyan-400/60" />

        <div className="text-[9px] tracking-[3px] text-cyan-300/40">
          SECURE CHANNEL
        </div>

      </div>

      <h2 className="mt-2 text-2xl font-semibold text-cyan-100">
        COMMUNICATION
      </h2>

      <p className="mt-3 max-w-md text-xs leading-5 text-slate-300/55">
        Establish a secure communication channel for
        projects, collaborations, internships or
        software development work.
      </p>

      <div className="mt-6 space-y-2">

        <ContactItem
          icon={
            <Mail className="h-4 w-4" />
          }
          label="EMAIL"
          value="roshanrhn11@gmail.com"
        />

        <ContactItem
          icon={
            <Wifi className="h-4 w-4" />
          }
          label="CHANNEL"
          value="AVAILABLE"
        />

      </div>

      <div className="mt-5 flex items-center gap-4">

        <FaGithub className="h-4 w-4 text-cyan-300/45" />

        <FaLinkedin className="h-4 w-4 text-cyan-300/45" />

        <span className="text-[8px] tracking-[2px] text-cyan-300/30">
          CONNECTION_READY
        </span>

      </div>

    </div>
  );
}

/* ============================================================
   SYSTEM STATUS
============================================================ */

function SystemStatus() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-5
        top-1/2
        z-30
        hidden
        -translate-y-1/2
        font-mono
        lg:block
      "
    >

      <div
        className="
          w-48
          border
          border-cyan-300/10
          bg-[#071523]/45
          p-4
          backdrop-blur-md
        "
      >

        <div className="mb-4 flex items-center gap-2 border-b border-cyan-300/10 pb-3">

          <Activity className="h-3.5 w-3.5 text-cyan-400" />

          <span className="text-[9px] tracking-[2px] text-cyan-300/55">
            SYSTEM STATUS
          </span>

        </div>

        <HudStatus
          label="CORE"
          value="ONLINE"
        />

        <HudStatus
          label="SECURITY"
          value="100%"
        />

        <HudStatus
          label="NETWORK"
          value="STABLE"
        />

        <HudStatus
          label="UPTIME"
          value="99.9%"
        />

      </div>

    </div>
  );
}

/* ============================================================
   TECH STACK
============================================================ */

function TechStack() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        right-5
        top-1/2
        z-30
        hidden
        -translate-y-1/2
        font-mono
        lg:block
      "
    >

      <div
        className="
          w-48
          border
          border-cyan-300/10
          bg-[#071523]/45
          p-4
          backdrop-blur-md
        "
      >

        <div className="mb-4 flex items-center gap-2 border-b border-cyan-300/10 pb-3">

          <Layers3 className="h-3.5 w-3.5 text-cyan-400" />

          <span className="text-[9px] tracking-[2px] text-cyan-300/55">
            TECH STACK
          </span>

        </div>

        <Tech
          icon={<FaReact />}
          text="React"
        />

        <Tech
          icon={<FaNodeJs />}
          text="Node.js"
        />

        <Tech
          icon={<Database />}
          text="MySQL"
        />

        <Tech
          icon={<ShieldCheck />}
          text="Prisma"
        />

        <Tech
          icon={<Wifi />}
          text="Cloud / Vercel"
        />

      </div>

    </div>
  );
}

/* ============================================================
   PLAN VIEW
============================================================ */

function PlanView({
  activeFace,
  onSelect,
}: PlanViewProps) {
  return (
    <div
      className="
        absolute
        bottom-5
        right-5
        z-40
        hidden
        font-mono
        md:block
      "
    >

      <div
        className="
          w-52
          border
          border-cyan-300/10
          bg-[#071523]/55
          p-3
          backdrop-blur-md
        "
      >

        <div className="mb-3 flex items-center justify-between">

          <div className="text-[8px] tracking-[2px] text-cyan-300/40">
            PLAN VIEW
          </div>

          <div className="text-[7px] tracking-[1px] text-cyan-300/25">
            4 PANELS
          </div>

        </div>

        <div className="relative mx-auto h-28 w-36">

          <PlanButton
            active={activeFace === "home"}
            className="absolute left-1/2 top-0 -translate-x-1/2"
            onClick={() => onSelect("home")}
          >
            HOME
          </PlanButton>

          <PlanButton
            active={activeFace === "about"}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            onClick={() => onSelect("about")}
          >
            IDENTITY
          </PlanButton>

          <PlanButton
            active={activeFace === "projects"}
            className="absolute left-0 top-1/2 -translate-y-1/2"
            onClick={() => onSelect("projects")}
          >
            PROJECTS
          </PlanButton>

          <PlanButton
            active={activeFace === "contact"}
            className="absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => onSelect("contact")}
          >
            CONTACT
          </PlanButton>

          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 border border-cyan-300/20">

            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/60" />

          </div>

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   EXPANDED SCREEN
============================================================ */

function ExpandedScreen({
  face,
  onClose,
}: ExpandedScreenProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.28,
      }}
      className="
        fixed
        inset-0
        z-[200]
        overflow-y-auto
        bg-[#02070e]/[0.98]
        backdrop-blur-2xl
      "
    >

      {/* Background grid */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(rgba(0,245,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.25)_1px,transparent_1px)]
          [background-size:45px_45px]
        "
      />

      {/* Scanner */}
      <motion.div
        className="
          pointer-events-none
          fixed
          left-0
          right-0
          top-0
          z-[205]
          h-px
          bg-cyan-300/30
          shadow-[0_0_20px_rgba(34,211,238,0.5)]
        "
        animate={{
          y: [
            0,
            "100vh",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Header */}
      <header
        className="
          sticky
          top-0
          z-[210]
          border-b
          border-cyan-300/10
          bg-[#030812]/85
          px-5
          py-4
          backdrop-blur-xl
          md:px-10
        "
      >

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="flex items-center gap-4 font-mono">

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-[9px] tracking-[3px] text-cyan-300/45">
                PORTFOLIO_OS
              </span>

            </div>

            <div className="hidden h-3 w-px bg-cyan-300/20 sm:block" />

            <div className="hidden text-xs tracking-[2px] text-cyan-100/75 sm:block">
              {faceLabels[face]}
            </div>

          </div>

          <button
            type="button"
            data-no-drag
            onClick={onClose}
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-md
              border
              border-cyan-300/20
              bg-cyan-300/[0.04]
              px-4
              py-2
              font-mono
              text-[8px]
              tracking-[1.5px]
              text-cyan-200/70
              transition-all
              hover:border-cyan-300/60
              hover:bg-cyan-300/10
              hover:text-cyan-100
            "
          >

            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />

            RETURN TO 3D SYSTEM

          </button>

        </div>

      </header>

      {/* Content */}
      <motion.div
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          z-10
          mx-auto
          min-h-[calc(100vh-73px)]
          max-w-7xl
        "
      >

        {face === "home" && (
          <Hero />
        )}

        {face === "about" && (
          <About />
        )}

        {face === "projects" && (
          <Projects />
        )}

        {face === "contact" && (
          <Contact />
        )}

      </motion.div>

      {/* Floating close button */}
      <button
        type="button"
        data-no-drag
        aria-label="Close full view"
        onClick={onClose}
        className="
          fixed
          bottom-6
          right-6
          z-[220]
          flex
          h-10
          w-10
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          border-cyan-300/20
          bg-[#071523]/80
          text-cyan-300/60
          backdrop-blur-md
          transition-all
          hover:border-cyan-300/60
          hover:bg-cyan-300/10
          hover:text-cyan-100
        "
      >
        <X className="h-4 w-4" />
      </button>

    </motion.div>
  );
}

/* ============================================================
   SMALL HELPERS
============================================================ */

function StatusTag({
  text,
}: {
  text: string;
}) {
  return (
    <span
      className="
        rounded
        border
        border-cyan-300/15
        bg-cyan-300/[0.025]
        px-2
        py-1
        text-[8px]
        tracking-[1.5px]
        text-cyan-300/60
      "
    >
      {text}
    </span>
  );
}

function HudStatus({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">

      <span className="text-[8px] tracking-[1.5px] text-slate-400/50">
        {label}
      </span>

      <span className="text-[8px] tracking-[1px] text-cyan-300/65">
        {value}
      </span>

    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-lg
        border
        border-cyan-300/10
        bg-cyan-300/[0.025]
        p-3
      "
    >

      <div className="text-[7px] tracking-[1.5px] text-cyan-300/35">
        {label}
      </div>

      <div className="mt-1 text-[10px] text-cyan-100/70">
        {value}
      </div>

    </div>
  );
}

function Tech({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-3">

      <span className="flex h-6 w-6 items-center justify-center text-cyan-300/65">
        {icon}
      </span>

      <span className="text-[9px] tracking-[1px] text-slate-300/55">
        {text}
      </span>

    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-cyan-300/10
        bg-cyan-300/[0.025]
        p-3
      "
    >

      <span className="text-cyan-300/70">
        {icon}
      </span>

      <div>

        <div className="text-[8px] tracking-[2px] text-cyan-300/35">
          {label}
        </div>

        <div className="mt-1 text-xs text-cyan-100/75">
          {value}
        </div>

      </div>

    </div>
  );
}

function PlanButton({
  active,
  className,
  children,
  onClick,
}: {
  active: boolean;
  className: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      data-no-drag
      onClick={onClick}
      className={`
        h-8
        w-16
        cursor-pointer
        border
        text-[7px]
        tracking-[1px]
        transition-all
        duration-200
        ${className}
        ${
          active
            ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.08)]"
            : "border-cyan-300/15 text-cyan-300/45 hover:border-cyan-300/45 hover:text-cyan-100"
        }
      `}
    >
      {children}
    </button>
  );
}

