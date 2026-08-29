"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        bg-white/80
        dark:bg-black/80
        backdrop-blur-md
        border-b
        z-50
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          justify-between
          items-center
          px-6
          py-5
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="
            text-xl
            font-bold
            text-foreground
          "
        >
          Roshan.dev
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
          "
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                text-foreground
                hover:text-muted-foreground
                transition
              "
            >
              {item.name}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div
          className="
            flex
            md:hidden
            items-center
            gap-3
          "
        >
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="
              p-2
              rounded-md
              hover:bg-accent
              transition
            "
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="
            md:hidden
            border-t
            border-border
            bg-white/95
            dark:bg-black/95
            backdrop-blur-md
          "
        >
          <div
            className="
              px-6
              py-4
              flex
              flex-col
              gap-4
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="
                  text-sm
                  text-foreground
                  hover:text-muted-foreground
                  transition
                  py-2
                "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

