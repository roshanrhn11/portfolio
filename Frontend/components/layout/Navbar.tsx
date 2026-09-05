
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  UserRound,
  FolderCode,
  Radio,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

type Screen = "home" | "about" | "projects" | "contact";

interface NavbarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems: {
  name: string;
  label: string;
  screen: Screen;
  icon: typeof Home;
}[] = [
  {
    name: "HOME",
    label: "MAIN",
    screen: "home",
    icon: Home,
  },
  {
    name: "IDENTITY",
    label: "PROFILE",
    screen: "about",
    icon: UserRound,
  },
  {
    name: "PROJECTS",
    label: "DATABASE",
    screen: "projects",
    icon: FolderCode,
  },
  {
    name: "CONTACT",
    label: "CHANNEL",
    screen: "contact",
    icon: Radio,
  },
];

export default function Navbar({
  activeScreen,
  onNavigate,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  /*
   * Navigate through the 3D cube system.
   */
  const handleNavigate = (screen: Screen) => {
    onNavigate(screen);
    setIsOpen(false);
  };

  /*
   * ROSHAN.DEV always returns to the Home face
   * of the 3D holographic cube.
   */
  const handleLogoClick = () => {
    handleNavigate("home");
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-3 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-cyan-400/20 bg-black/30 px-4 py-3 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur-xl">
        {/* =====================================================
            ROSHAN.DEV
            Clicking this returns to the 3D HOME system
        ====================================================== */}
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="Return to 3D portfolio home"
          className="group flex items-center gap-3"
        >
          {/* Logo HUD square */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            {/* Core */}
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            {/* Inner frame */}
            <span className="absolute inset-1 rounded-md border border-cyan-400/10" />

            {/* Corner indicators */}
            <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan-400/40" />
            <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-cyan-400/40" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-cyan-400/40" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-400/40" />
          </div>

          {/* Logo text */}
          <div className="hidden text-left sm:block">
            <p className="font-mono text-sm font-bold tracking-[2px] text-cyan-300 transition-colors group-hover:text-cyan-200">
              ROSHAN.DEV
            </p>

            <p className="font-mono text-[8px] tracking-[2px] text-cyan-400/40 transition-colors group-hover:text-cyan-400/70">
              PORTFOLIO_OS // 3D_SYSTEM
            </p>
          </div>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.screen;

            return (
              <button
                key={item.screen}
                type="button"
                onClick={() => handleNavigate(item.screen)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  px-4
                  py-2.5
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                      : "border border-transparent text-muted-foreground hover:border-cyan-400/10 hover:bg-cyan-400/5 hover:text-cyan-300"
                  }
                `}
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                <span className="font-mono text-[10px] tracking-[1.5px]">
                  {item.name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <>
                    <span className="absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                    <span className="absolute -right-1 -top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  </>
                )}
              </button>
            );
          })}

          {/* Theme toggle */}
          <div className="ml-3 border-l border-cyan-400/10 pl-3">
            <ThemeToggle />
          </div>
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ====================================================== */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-2.5 text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        {isOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/70 p-2 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl md:hidden">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.screen;

              return (
                <button
                  key={item.screen}
                  type="button"
                  onClick={() => handleNavigate(item.screen)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    transition-all
                    ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-muted-foreground hover:bg-cyan-400/5 hover:text-cyan-300"
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />

                  <div>
                    <p className="font-mono text-xs tracking-[2px]">
                      {item.name}
                    </p>

                    <p className="font-mono text-[8px] tracking-[1px] text-cyan-400/40">
                      {item.label}
                    </p>
                  </div>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

