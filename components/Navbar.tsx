"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label:"About",   href:"#about"   },
  { label:"Skills",  href:"#skills"  },
  { label:"Work",    href:"#work"    },
  { label:"Contact", href:"#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isScrolled = mounted && scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#" className="-mx-3">
          <Image
            src={isScrolled ? "/logo-bl-or.png" : "/logo-wh-or.png"}
            alt="Sewell Labs"
            height={96}
            width={240}
            className="h-20 w-auto"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm font-display font-medium transition-colors duration-200 ${isScrolled ? "text-sewell-text hover:text-sewell-orange" : "text-white/80 hover:text-white"}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-xs font-display font-medium transition-colors duration-200 ${isScrolled ? "text-sewell-text" : "text-white/80"}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
