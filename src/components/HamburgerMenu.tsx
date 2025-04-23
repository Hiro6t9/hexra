
import React, { useState, useEffect, useRef } from "react";
import { Home, Discord, LayoutDashboard, PanelRight, SquareUser } from "lucide-react";

const MENU = [
  { name: "Home", href: "#", icon: Home },
  { name: "Discord", href: "https://discord.gg/AGykahgch8", icon: Discord, external: true },
  { name: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { name: "Panel", href: "#panel", icon: PanelRight },
  { name: "Billing", href: "#billing", icon: SquareUser }
];

function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
}

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  // Animate menu items staggered
  const [showItems, setShowItems] = useState(false);
  useEffect(() => {
    if (open) {
      setTimeout(() => setShowItems(true), 100);
    } else {
      setShowItems(false);
    }
  }, [open]);

  // Close menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Accessibility: close on Esc
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Focus trap (optional, for accessibility—simple approach)
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
      'a,button,[tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }, [open]);

  return (
    <>
      {/* Top header bar */}
      <div className="flex items-center justify-between py-2 px-4 md:px-8 bg-transparent relative z-50 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 select-none group" aria-label="Go Home">
          {/* Placeholder for logo (swap with svg if available) */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F2A7B4] to-[#6D9EC5] flex items-center justify-center mr-1 group-hover:scale-105 transition-transform">
            <span className="font-bold text-lg text-white">H</span>
          </div>
          <span className="font-extrabold text-lg gradient-text tracking-widest">HEXRA.CLOUD</span>
        </a>
        {/* Hamburger icon - mobile only */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 rounded-lg p-2 flex flex-col justify-center items-center transition-all focus:outline-none focus:ring-2 focus:ring-hexra-purple group"
        >
          {/* Hamburger/X lines */}
          <span
            className={`block absolute h-0.5 w-6 rounded bg-white transition-all duration-300 ease-in-out ${
              open
                ? "rotate-45 top-1/2 left-2.5"
                : "top-2 left-2.5"
            }`}
            style={{
              boxShadow: open ? "0 0 6px #A0789C88" : "",
            }}
          />
          <span
            className={`block absolute h-0.5 w-6 rounded bg-white transition-all duration-300 ease-in-out
              ${open ? "opacity-0 left-2.5" : "top-4 left-2.5"}
            `}
          />
          <span
            className={`block absolute h-0.5 w-6 rounded bg-white transition-all duration-300 ease-in-out ${
              open
                ? "-rotate-45 top-1/2 left-2.5"
                : "top-6 left-2.5"
            }`}
            style={{
              boxShadow: open ? "0 0 6px #A0789C88" : "",
            }}
          />
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {MENU.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative text-sm font-semibold text-gray-200 px-2 py-1 transition-all duration-150 hover:scale-105 hover:text-white hover:text-glow focus:outline-none group"
            >
              <span className="inline-flex items-center gap-2">
                <item.icon size={18} className="opacity-70 group-hover:opacity-90 transition-opacity" />
                {item.name}
              </span>
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#F2A7B4] to-[#6D9EC5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full pointer-events-none"
              />
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU BACKDROP + MENU */}
      <div
        id="mobile-menu"
        ref={menuRef}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        className={`fixed md:hidden inset-0 z-[99] transition-all duration-400
          ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        {/* Backdrop Blur + semi-transparent glassmorphism layer */}
        <div
          className={`absolute inset-0 transition-all duration-350 bg-[#1A1F2Cbb] 
            backdrop-blur-2xl will-change-transform
            ${open ? "opacity-100" : "opacity-0"}
          `}
          aria-hidden="true"
        />
        {/* Slide-in Menu */}
        <div
          className={`absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center
            transition-transform duration-500 ease-in-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="w-full flex flex-col items-center justify-center gap-7">
            {MENU.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                tabIndex={open ? 0 : -1}
                style={{
                  transitionDelay: open && showItems ? `${idx * 80 + 150}ms` : "0ms",
                }}
                className={`
                  flex items-center gap-3 text-2xl font-semibold px-6 py-2 rounded-xl transition-all
                  duration-300 opacity-0 transform
                  ${open && showItems ? "animate-fade-in opacity-100 translate-y-0" : "translate-y-6"}
                  group
                  bg-gradient-to-br from-white/0 to-white/5
                  backdrop-brightness-110
                  hover:bg-gradient-to-r hover:from-[#F2A7B4]/15 hover:to-[#6D9EC5]/10
                  hover:text-white 
                  text-gray-200 
                  shadow-md
                  outline-none
                  focus:ring-2 focus:ring-hexra-purple/50
                `}
                onClick={() => setOpen(false)}
              >
                <item.icon size={24} className="opacity-75 group-hover:opacity-100" />
                <span className="relative z-10">
                  {item.name}
                  {/* Neon/glo underline */}
                  <span className="block h-0.5 mt-1 bg-gradient-to-r from-[#F2A7B4] to-[#6D9EC5] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
